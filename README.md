# smz-HP — 株式会社清水商會 公式ホームページ

本番URL: https://smz-hp-9kvh.vercel.app/
リポジトリ: https://github.com/sky13yks/smz-HP
担当: 山口 朔矢（@sky13yks）

---

## 技術スタック

| 役割 | 技術 |
|------|------|
| フレームワーク | React 19 + TypeScript |
| ルーティング | React Router v7 |
| ビルドツール | Vite 7 |
| スタイリング | Tailwind CSS 4 |
| UIコンポーネント | Radix UI + shadcn/ui |
| アニメーション | Framer Motion + カスタム歯車アニメーション |
| アイコン | Lucide React |
| フォント | Google Fonts - Noto Sans JP |
| ホスティング | Vercel（mainブランチへのpushで自動デプロイ） |

---

## ローカル開発手順

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動（http://localhost:5173）
npm run dev

# 本番ビルド（Vercelが自動実行するため手動実行は不要）
npm run build
```

---

## ディレクトリ構成

```
smz-HP/
├── public/
├── src/
│   ├── main.tsx              # Reactエントリーポイント
│   ├── App.tsx               # ルーター設定
│   ├── routes.tsx            # ページルート定義
│   ├── index.css             # グローバルスタイル（カラーテーマ定義）
│   ├── assets/               # 画像・ロゴ
│   ├── components/
│   │   ├── Header.tsx        # ナビゲーション
│   │   ├── Footer.tsx        # フッター
│   │   ├── RootLayout.tsx    # 全ページ共通レイアウト
│   │   ├── ScrollToTop.tsx   # ページ遷移時のスクロールリセット
│   │   ├── GearAnimation.tsx # 歯車アニメーション（ホームページ用）
│   │   ├── GearTransition.tsx
│   │   ├── MatrixTransition.tsx
│   │   └── ui/               # Radix UI ベースの汎用UIコンポーネント群
│   └── pages/                # 各ページコンポーネント
│       ├── Home
│       ├── Company（会社情報）
│       ├── History（沿革）
│       ├── Services（事業内容）
│       ├── Contact（お問い合わせ）
│       ├── Access（アクセス）
│       ├── FAQ
│       ├── TechSolutions（技術ソリューション）
│       └── MatrixBrand（Matrixブランド）
├── index.html
├── package.json
└── vite.config.ts
```

---

## ページ構成（ナビゲーション）

| ナビリンク | 内容 |
|-----------|------|
| ホーム | トップページ・歯車アニメーション |
| 事業内容 | 歯車工具・工作機械・製造コーディネート |
| 会社情報 | 会社概要・アクセス |
| Matrix | Matrix Precision ブランドページ |
| 技術資料 | 技術ソリューション |
| 沿革 | 年表（1950〜） |
| お問い合わせ | 問い合わせフォーム |

---

## 会社情報（コード内で使用している実データ）

| 項目 | 値 |
|------|----|
| 会社名 | 株式会社清水商會 |
| 代表者 | 代表取締役　清水 正太 |
| 電話 | 03-5732-2800 |
| FAX | 03-5732-2891 |
| メール | team@smz-shokai.com |
| 本社 | 〒146-0093 東京都大田区矢口3-1-20 |
| ツルミマシンセンター | 〒230-0071 神奈川県横浜市鶴見区駒岡4-39-25 |
| 本社 Google マップ | https://maps.app.goo.gl/viTq4t7xNArcoLrM6 |

---

## デプロイ

- `main` ブランチへの push で Vercel が自動デプロイ
- `build/` ディレクトリはコミット不要（`.gitignore` で除外済み）
- 環境変数の設定は不要（静的サイト）

---

## 今後の改善候補

- [ ] お問い合わせフォームのバックエンド連携
- [ ] OGP画像の追加（SNSシェア時のサムネイル）
- [ ] Google Analytics の導入
- [ ] ツルミマシンセンターのページ追加・在庫リンク整備
