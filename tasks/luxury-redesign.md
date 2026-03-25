# Long-Running Task: luxury-redesign

## 目標
HPからAIっぽさを排除し、Apple/Leica的なピュアホワイト/シルバー系モノトーンの上質なハイブランドデザインに転換する。

## 機能リスト
### Phase 1: 基盤
- [x] 1-1: Google Fonts 追加 (index.html)
- [x] 1-2: カラーパレット置換 (index.css @theme)
- [x] 1-3: フォント定義 (index.css @theme)
- [x] 1-4: アニメーション改修 (index.css)
- [x] 1-5: コンポーネントクラス置換 (index.css @layer)

### Phase 2: 共通コンポーネント
- [x] 2-1: GearAnimation.tsx 削除
- [x] 2-2: GearTransition.tsx 削除
- [x] 2-3: MatrixTransition.tsx 簡素化
- [x] 2-4: Header.tsx フラットバー化
- [x] 2-5: Footer.tsx Tailwind統一
- [x] 2-6: RootLayout.tsx 参照除去（不要だった）

### Phase 3: ページ改修
- [x] 3-1: Home.tsx
- [x] 3-2: Services.tsx
- [x] 3-3: Company.tsx
- [x] 3-4: MatrixBrand.tsx
- [x] 3-5: History.tsx
- [x] 3-6: Contact.tsx
- [x] 3-7: TechSolutions.tsx
- [x] 3-8: FAQ.tsx
- [x] 3-9: Access.tsx
- [x] 3-10: NotFound.tsx

### Phase 4: 品質確認
- [x] 4-1: ビルド通過・テスト修正
- [ ] 4-2: 目視確認・微調整

## 進捗ログ
| 日時 | セッション | 完了した機能 | 次のステップ |
|------|-----------|-------------|-------------|
| 2026-03-25 | 1 | Phase 1-4 全完了 | 目視確認・微調整 |

## 検証方法
- [x] npm run build 通過
- [x] npm run test 通過 (65/65)
- [ ] レスポンシブ確認

## メモ
- カラー方針: ピュアホワイト/シルバー系（Apple/Leica的モノトーン）
- 遷移: GearTransition削除、MatrixTransitionのみ簡素化して残す
- MATRIX: 本体と統一、緑アクセントのみ差別化
- Footer テスト: Matrix分岐テストをインラインスタイル依存から存在確認に変更
- GearAnimation.tsx, GearTransition.tsx を削除（2ファイル）
