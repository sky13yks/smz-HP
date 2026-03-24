import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { ErrorBoundary } from '@/components/ErrorBoundary'

vi.stubGlobal('scrollTo', vi.fn())

// 意図的にエラーを投げるコンポーネント
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error('テストエラー')
  return <div>正常コンテンツ</div>
}

function renderWithRouter(element: React.ReactElement) {
  const router = createMemoryRouter(
    [{ path: '/', element }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('ErrorBoundary コンポーネント', () => {
  // React のエラーログを抑制
  const originalError = console.error
  beforeEach(() => {
    console.error = vi.fn()
  })
  afterEach(() => {
    console.error = originalError
  })

  it('正常時は子要素をそのまま表示する', () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )
    expect(screen.getByText('正常コンテンツ')).toBeInTheDocument()
  })

  it('エラー発生時はフォールバックUIを表示する', () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    expect(screen.getByText(/エラーが発生しました/)).toBeInTheDocument()
  })

  it('フォールバックUIにホームへ戻るリンクがある', () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    const homeLink = screen.getByRole('link', { name: /ホームに戻る/ })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('フォールバックUIにリトライボタンがある', async () => {
    renderWithRouter(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    const retryButton = screen.getByRole('button', { name: /再読み込み/ })
    expect(retryButton).toBeInTheDocument()
  })
})
