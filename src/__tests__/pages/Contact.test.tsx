import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Contact } from '@/pages/Contact'

vi.stubGlobal('scrollTo', vi.fn())

// sonner の toast をモック
vi.mock('sonner', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
  Toaster: () => null,
}))

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: Contact }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Contact ページ', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    vi.stubGlobal('scrollTo', vi.fn())
  })

  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getAllByText(/お問い合わせ/).length).toBeGreaterThanOrEqual(1)
  })

  it('電話番号が表示される', () => {
    renderPage()
    expect(screen.getByText('03-5732-2800')).toBeInTheDocument()
  })

  it('メールアドレスが表示される', () => {
    renderPage()
    expect(screen.getByText('team@smz-shokai.com')).toBeInTheDocument()
  })

  it('フォームの必須フィールドにlabel関連付けがある', () => {
    renderPage()
    expect(screen.getByLabelText(/お問合せ種別/)).toBeInTheDocument()
    expect(screen.getByLabelText(/会社名/)).toBeInTheDocument()
    expect(screen.getByLabelText(/お名前/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/お問合せ内容/)).toBeInTheDocument()
  })

  it('送信ボタンが表示される', () => {
    renderPage()
    const submitButton = screen.getByRole('button', { name: /送信する/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('フォーム送信成功でtoastが表示されフォームがリセットされる', async () => {
    // fetch をモック（成功）
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    }))

    const { toast } = await import('sonner')
    const user = userEvent.setup()
    renderPage()

    // フォーム入力
    await user.selectOptions(screen.getByLabelText(/お問合せ種別/), 'quotation')
    await user.type(screen.getByLabelText(/会社名/), 'テスト株式会社')
    await user.type(screen.getByLabelText(/お名前/), '山田太郎')
    await user.type(screen.getByLabelText(/Email/), 'test@example.com')
    await user.type(screen.getByLabelText(/お問合せ内容/), 'テストメッセージ')

    // 送信
    await user.click(screen.getByRole('button', { name: /送信する/i }))

    // toast.success が呼ばれた
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        expect.stringContaining('お問合せを受け付けました')
      )
    })
  })
})
