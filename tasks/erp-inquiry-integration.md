# HP → 受発注システム 問い合わせ連携

## 概要
HPのお問い合わせフォーム送信時に、受発注システム（smz-order-management）へ
引き合い情報を自動送信する。即座に取引先登録はせず、社内承認フローを挟む。

## アーキテクチャ
- HP側: api/contact.ts からWebhookでPOST（送信のみ）
- 受発注側: Webhookを受信し hp_inquiries テーブルに保存
- 受発注側: 社内確認画面で承認 → companies/contacts/deals に変換

## 作業分担

### smz-HP側（このリポジトリ）
- [ ] api/contact.ts に Webhook 送信を追加（非同期・失敗しても問い合わせ自体は成功扱い）
- 環境変数: `ORDER_SYSTEM_WEBHOOK_URL`, `ORDER_SYSTEM_WEBHOOK_SECRET`

### smz-order-management側（別リポジトリ・別セッション）
- [ ] DB: hp_inquiries テーブル作成（マイグレーション）
  - id, category, company_name, contact_name, email, message
  - status: pending / approved / rejected
  - approved_company_id, approved_contact_id, approved_deal_id（承認後に紐付け）
  - created_at, reviewed_at, reviewed_by
- [ ] API: POST /api/webhooks/hp-inquiry エンドポイント作成
  - Webhook Secret で認証
  - hp_inquiries に INSERT
- [ ] UI: 問い合わせ受信トレイ画面
  - pending 一覧表示
  - 承認ボタン → companies/contacts/deals 作成フロー
  - 却下ボタン → rejected に更新
- [ ] Google Chat 通知: 新しい問い合わせ受信時に通知

## セキュリティ
- Webhook Secret（共有シークレット）で HP → 受発注システムの通信を認証
- hp_inquiries テーブルにも RLS 適用
- 承認フローで営業メール・スパムをフィルタ

## 備考
- HP側のメール送信が成功していれば、Webhook送信が失敗してもお問い合わせ自体は完了扱い
- 重複チェック: company_name + email で同一問い合わせを検知
