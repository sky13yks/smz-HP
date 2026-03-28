# Long-Running Task: notion-cms-blog

## 目標
技術資料ページのブログ記事をNotion CMSで管理可能にする。
将来的にAI News Bridgeからの自動投稿にも対応する基盤を構築する。

## 機能リスト

### Phase 1: Notion DB構築
- [x] 1-1: 既存「記事管理」DB（AI News Bridge配下）をそのまま利用
- [x] 1-2: DB構造確認済み — 13記事（全てウィークリー深掘り、全て下書き）

### Phase 2: フロントエンド連携
- [x] 2-1: Vercel Serverless Function `/api/articles` 作成（Notion APIプロキシ）
- [x] 2-2: TechSolutions.tsx の「技術資料」タブをNotion DB連携に書き換え
- [x] 2-3: 種別フィルタ（すべて / ウィークリー深掘り / AIニュース / IT基礎）追加

### Phase 3: AI News Bridge連携準備
- [ ] 3-1: AI News Bridge が書き込むためのDB構造を文書化
- [ ] 3-2: 記事詳細ページ（個別記事表示）の実装検討

## 技術方針
- Notion Public API（@notionhq/notion-client）でSSG/ISR的にビルド時取得
  → ただし Vite SPA なのでランタイムfetch（Notion API proxy経由）が現実的
- Vercel Serverless Functions で Notion API をプロキシ（APIキー秘匿）
- カテゴリで「業界ニュース」を追加し、AI News Bridge の出力先として利用

## 検証方法
- `npm run build` 成功
- 開発環境でNotion記事が表示されること
- カテゴリフィルタが動作すること

## 進捗ログ
| 日時 | 内容 |
|------|------|
| 2026-03-28 | Phase 1-2 完了: Notion DB確認、APIプロキシ作成、TechSolutions.tsx書き換え |

## 次のステップ
- Vercelに環境変数を設定してデプロイ
- Notion DBで記事のステータスを「配信済み」に変更して動作確認

## メモ
- Notion親ページ: 226f681388b2407aba0856c76c8a16ed（株式会社清水商會 ホームページ）
- AI News Bridge との統合は Phase 3 で対応
