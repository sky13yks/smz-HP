# 株式会社清水商會 コーポレートサイト

## プロジェクト概要
B2B精密機械商社「株式会社清水商會」のコーポレートサイト。
歯車加工機械・切削工具・精密加工サービスを扱う。

## 技術スタック
- **フレームワーク**: React 18 + TypeScript (strict)
- **ビルド**: Vite + SWC
- **スタイル**: Tailwind CSS v4 + shadcn/ui (Radix UI)
- **ルーティング**: React Router v7
- **テスト**: Vitest + @testing-library/react + jsdom
- **デプロイ**: Vercel (main ブランチ自動デプロイ)

## コマンド
```bash
npm run dev        # 開発サーバー起動 (localhost:3000)
npm run build      # プロダクションビルド (/build)
npm run test       # テスト実行
npm run test:watch # テスト監視モード
npm run test:ui    # テスト UI モード
```

## ディレクトリ構成
```
src/
├── pages/          # ルートページ (9ページ)
├── components/     # 共有コンポーネント
│   └── ui/         # shadcn/ui コンポーネント (50+)
├── __tests__/      # テストファイル
│   ├── components/ # コンポーネントテスト
│   ├── utils/      # ユーティリティテスト
│   └── routes.test.tsx  # ルーティングテスト
├── assets/         # 画像・ロゴ
├── routes.ts       # ルーター定義
├── index.css       # グローバルテーマ・アニメーション
└── main.tsx        # エントリポイント
```

## 言語
- ユーザーへの応答は日本語で行う
- コミットメッセージは日本語で書く

## Git管理ルール
- 意味のある単位の作業が完了したら必ず git commit する
- 1つのコミットに無関係な変更を混ぜない（単一責任）
- コミットメッセージの形式: `prefix: 内容`
  - feat / fix / refactor / style / docs / test / chore
- push はユーザーの明示的な指示があるまで行わない
- .env や credentials など秘密情報を含むファイルはコミットしない
- ビルドが壊れた状態でコミットしない

## 開発ルール
- **TDD必須**: Red → Green → Refactor サイクルを厳守（詳細: .claude/rules/tdd.md）
- **型安全**: any 禁止、strict モード
- **パスエイリアス**: `@/*` → `./src/*`
- **コード品質**: 詳細は .claude/rules/project-management.md を参照
