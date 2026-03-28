import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface ContactForm {
  category: string;
  company: string;
  name: string;
  email: string;
  message: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  quotation: '製品のお見積り',
  technical: '技術的なご相談',
  spec: '仕様のお問合せ',
  other: 'その他',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || 'team@smz-shokai.com';

  if (!resendKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Mail service not configured' });
  }

  const { category, company, name, email, message } = req.body as ContactForm;

  if (!category || !company || !name || !email || !message) {
    return res.status(400).json({ error: '必須項目が入力されていません' });
  }

  const resend = new Resend(resendKey);
  const categoryLabel = CATEGORY_LABELS[category] || category;

  try {
    // 社内通知メール
    await resend.emails.send({
      from: 'お問い合わせ <noreply@smz-shokai.com>',
      to: [toEmail],
      subject: `【HP問合せ】${categoryLabel} - ${company} ${name}様`,
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
    });

    // 送信者への自動返信
    await resend.emails.send({
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
        '担当者より24時間以内にご回答いたします。',
        'しばらくお待ちくださいますようお願い申し上げます。',
        '',
        '━━━━━━━━━━━━━━━━━━━━',
        '株式会社清水商會',
        '〒146-0093 東京都大田区矢口3-1-20',
        'TEL: 03-5732-2800',
        'Email: team@smz-shokai.com',
        '━━━━━━━━━━━━━━━━━━━━',
      ].join('\n'),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'メール送信に失敗しました' });
  }
}
