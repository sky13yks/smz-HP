# テスト駆動開発 (TDD) ルール

## 基本原則: Red → Green → Refactor

すべての機能追加・バグ修正は TDD サイクルに従うこと。

### 1. Red（失敗するテストを先に書く）
- 実装コードを書く **前に** テストを書く
- テストが失敗することを確認してから実装に進む
- テスト名は「何が」「どうなるべきか」を日本語または英語で明確に記述する

### 2. Green（最小限の実装でテストを通す）
- テストを通すための **最小限の** コードだけを書く
- 過剰な実装やエッジケースの先回りはしない

### 3. Refactor（リファクタリング）
- テストが通った後にコードを整理する
- リファクタリング中はテストが常にグリーンであることを確認する

## テスト構成

### テストフレームワーク
- **Vitest** をユニットテスト・コンポーネントテストに使用
- **@testing-library/react** でコンポーネントのレンダリングテスト
- **jsdom** をテスト環境として使用

### ファイル配置
- テストファイルは `src/__tests__/` ディレクトリに配置
- ファイル名は `{対象}.test.tsx` または `{対象}.test.ts`
- ページテスト: `src/__tests__/pages/`
- コンポーネントテスト: `src/__tests__/components/`
- ユーティリティテスト: `src/__tests__/utils/`

### テストの書き方
```typescript
import { describe, it, expect } from 'vitest'

describe('対象の機能名', () => {
  it('期待される振る舞いの説明', () => {
    // Arrange（準備）
    // Act（実行）
    // Assert（検証）
  })
})
```

## react-router テストのパターン
- `createMemoryRouter` + `RouterProvider` を `react-router` からインポート
- `window.scrollTo` は `vi.stubGlobal('scrollTo', vi.fn())` でモック
- テキスト重複がある場合は `getAllByText` を使用

## 実装フロー

新しい機能を追加するとき:
1. `npm run test` でテストスイートが正常であることを確認
2. 失敗するテストを書く → `npm run test` で Red を確認
3. 最小限の実装を書く → `npm run test` で Green を確認
4. リファクタリング → `npm run test` でグリーン維持を確認
5. `npm run build` でビルドエラーがないことを確認

## 禁止事項
- テストなしでの機能追加・修正は禁止
- テストを通すためだけのハードコーディングは最終的に除去すること
- `test.skip` や `test.todo` を長期間放置しない
