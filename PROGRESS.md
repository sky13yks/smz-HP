# PROGRESS.md - 開発進捗レポート

## 2026-03-25: テストハーネス導入

### 完了タスク

#### 1. Vitest テストハーネス構築
- **vitest.config.ts** を作成
  - jsdom 環境設定
  - パスエイリアス (`@/`) 設定
  - Figma 生成コードのバージョン付きインポートエイリアス全件設定
  - react-router CJS/ESM デュアルパッケージ問題を `resolve.conditions` + `deps.optimizer` で解決

#### 2. テスティングライブラリ導入
- `vitest` v4.1.1
- `@testing-library/react` v16.3.2
- `@testing-library/jest-dom` v6.9.1
- `@testing-library/user-event` v14.6.1
- `jsdom` v29.0.1

#### 3. テストファイル作成（26テスト / 5ファイル）
| ファイル | テスト数 | 内容 |
|---------|---------|------|
| `src/__tests__/utils/cn.test.ts` | 6 | cn() ユーティリティ関数 |
| `src/__tests__/components/Header.test.tsx` | 4 | ナビゲーション・ロゴ・モバイルメニュー |
| `src/__tests__/components/Footer.test.tsx` | 7 | 会社情報・Matrixページスタイル切替 |
| `src/__tests__/components/RootLayout.test.tsx` | 4 | レイアウト構成・SVGフィルター |
| `src/__tests__/routes.test.tsx` | 5 | 5ページのルーティング確認 |

#### 4. package.json スクリプト追加
- `npm run test` — テスト実行
- `npm run test:watch` — 監視モード
- `npm run test:ui` — UI モード

#### 5. ルールファイル整備
- `.claude/rules/tdd.md` — TDD ルール策定
- `.claude/rules/project-management.md` — プロジェクト管理ルール策定
- `CLAUDE.md` — プロジェクト概要・コマンド・ルール

### テスト結果
```
Test Files  5 passed (5)
     Tests  26 passed (26)
  Duration  674ms
```

### 技術メモ
- react-router v7 は ESM/CJS デュアルパッケージ問題あり。`resolve.conditions: ['import', 'module', 'browser', 'default']` と `deps.optimizer.web.include` で解決
- `ScrollToTop` コンポーネントが `window.scrollTo` を呼ぶため、テストでは `vi.stubGlobal` でモック必須
- Figma 生成の shadcn/ui コンポーネントがバージョン付きインポート (`@radix-ui/react-accordion@1.2.3`) を使用しているため、vitest.config.ts にもエイリアス設定が必要

---

## Phase 1: fix/critical-stability — 安定性の基盤

### 完了タスク

#### 1. ErrorBoundary コンポーネント（TDD: RED→GREEN→REFACTOR）
- `src/components/ErrorBoundary.tsx`: クラスコンポーネントによるエラーキャッチ
- フォールバックUI: エラーメッセージ + 再読み込み + ホームへ戻るリンク
- RootLayout の `<Outlet />` をラップ

#### 2. NotFound (404) ページ
- `src/pages/NotFound.tsx`: 404表示 + ホームリンク
- `src/routes.ts`: ワイルドカードルート `{ path: "*", Component: NotFound }` 追加

#### 3. テストカバレッジ拡充（26 → 60テスト）
| 新規テストファイル | テスト数 | 内容 |
|---------|---------|------|
| `ErrorBoundary.test.tsx` | 4 | エラーキャッチ・フォールバック表示 |
| `ScrollToTop.test.tsx` | 2 | scrollTo呼出・null返却 |
| `Home.test.tsx` | 3 | ヒーロー・サービスセクション |
| `History.test.tsx` | 3 | タイムライン・創業年 |
| `Access.test.tsx` | 3 | 住所・電話番号 |
| `TechSolutions.test.tsx` | 2 | タブ表示 |
| `MatrixBrand.test.tsx` | 2 | カテゴリ表示 |
| `Services.test.tsx` | 2 | 3サービスカード |
| `Contact.test.tsx` | 5 | フォーム項目・送信ボタン |
| `NotFound.test.tsx` | 3 | 404・ホームリンク・ルーティング統合 |
| `routes.test.tsx` 拡充 | +5 | 全ルート+404テスト |

#### 4. テスト環境改善
- `setup.ts`: IntersectionObserver / ResizeObserver のモック追加
- RootLayout: 無効トランジション(MatrixTransition/GearTransition)のインポート削除

### テスト結果
```
Test Files  15 passed (15)
     Tests  60 passed (60)
  Duration  1.48s
Build: ✓ 732ms
```
