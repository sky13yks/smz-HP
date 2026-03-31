import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const CATEGORY_LABELS: Record<string, string> = {
  quotation: '製品のお見積り',
  technical: '技術的なご相談',
  spec: '仕様のお問合せ',
  other: 'その他',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

// 簡易インメモリレートリミット（IPあたり5分間に3回まで）
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function sanitizeHeader(input: string): string {
  return input.replace(/[\r\n\t]/g, ' ').trim().slice(0, MAX_FIELD_LENGTH);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // レートリミット
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(clientIp)) {
    return res.status(429).json({ error: '送信回数の上限に達しました。しばらく経ってから再度お試しください。' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;

  if (!resendKey || !toEmail) {
    console.error('Missing env: RESEND_API_KEY or CONTACT_EMAIL');
    return res.status(500).json({ error: 'Mail service not configured' });
  }

  // 入力取得・バリデーション
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: '不正なリクエストです' });
  }

  const category = typeof body.category === 'string' ? body.category.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!category || !company || !name || !email || !message) {
    return res.status(400).json({ error: '必須項目が入力されていません' });
  }

  // カテゴリホワイトリスト
  if (!(category in CATEGORY_LABELS)) {
    return res.status(400).json({ error: '不正なお問い合わせ種別です' });
  }

  // メールフォーマット検証
  if (!EMAIL_REGEX.test(email) || email.length > MAX_FIELD_LENGTH) {
    return res.status(400).json({ error: 'メールアドレスの形式が正しくありません' });
  }

  // 長さ制限
  if (company.length > MAX_FIELD_LENGTH || name.length > MAX_FIELD_LENGTH) {
    return res.status(400).json({ error: '入力内容が長すぎます' });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `メッセージは${MAX_MESSAGE_LENGTH}文字以内でお願いします` });
  }

  const resend = new Resend(resendKey);
  const categoryLabel = CATEGORY_LABELS[category];
  const safeCompany = sanitizeHeader(company);
  const safeName = sanitizeHeader(name);

  try {
    const [notifyResult, replyResult] = await Promise.allSettled([
      // 社内通知メール
      resend.emails.send({
        from: 'お問い合わせ <noreply@smz-shokai.com>',
        to: [toEmail],
        subject: `【HP問合せ】${categoryLabel} - ${safeCompany} ${safeName}様`,
        text: [
          `お問い合わせ種別: ${categoryLabel}`,
          `会社名: ${company}`,
          `お名前: ${name}`,
          `メールアドレス: ${email}`,
          '',
          '--- お問い合わせ内容 ---',
          message,
          '',
          '---',
          'このメールは清水商會HPのお問い合わせフォームから自動送信されました。',
        ].join('\n'),
      }),
      // 送信者への自動返信
      resend.emails.send({
        from: '株式会社清水商會 <noreply@smz-shokai.com>',
        to: [email],
        subject: '【清水商會】お問い合わせを受け付けました',
        text: [
          `${name} 様`,
          '',
          'この度はお問い合わせいただき、誠にありがとうございます。',
          '以下の内容で受け付けいたしました。',
          '',
          `お問い合わせ種別: ${categoryLabel}`,
          `会社名: ${company}`,
          '',
          '--- お問い合わせ内容 ---',
          message,
          '',
          '---',
          '担当者より迅速にご回答いたします。',
          'しばらくお待ちくださいますようお願い申し上げます。',
          '',
          '━━━━━━━━━━━━━━━━━━━━',
          '株式会社清水商會',
          '〒146-0093 東京都大田区矢口3-1-20',
          'TEL: 03-5732-2800',
          'Email: team@smz-shokai.com',
          '━━━━━━━━━━━━━━━━━━━━',
        ].join('\n'),
      }),
    ]);

    // 社内通知が失敗した場合はエラー
    if (notifyResult.status === 'rejected') {
      console.error('Notify email failed:', notifyResult.reason);
      return res.status(500).json({ error: 'メール送信に失敗しました' });
    }

    if (replyResult.status === 'rejected') {
      console.error('Reply email failed (notify succeeded):', replyResult.reason);
    }

    // 受発注システムへWebhook送信（非同期・失敗しても問い合わせは成功扱い）
    const webhookUrl = process.env.ORDER_SYSTEM_WEBHOOK_URL;
    const webhookSecret = process.env.ORDER_SYSTEM_WEBHOOK_SECRET;
    if (webhookUrl && webhookSecret) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Secret': webhookSecret,
        },
        body: JSON.stringify({
          source: 'smz-hp',
          category,
          company,
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        }),
      }).catch(err => {
        console.error('Webhook to order system failed (non-blocking):', err);
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'メール送信に失敗しました' });
  }
}
