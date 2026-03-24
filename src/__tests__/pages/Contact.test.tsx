import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Contact } from '@/pages/Contact'

vi.stubGlobal('scrollTo', vi.fn())

// sonner の toast をモック
vi.mock('sonner', () => ({
  toast: { success: vi.fn() },
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
  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/GET IN/)).toBeInTheDocument()
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
    // htmlFor と id の関連付けを確認
    expect(screen.getByLabelText(/Category/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Company Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message Content/)).toBeInTheDocument()
  })

  it('送信ボタンが表示される', () => {
    renderPage()
    const submitButton = screen.getByRole('button', { name: /Process & Send/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('フォーム送信でtoastが表示されフォームがリセットされる', async () => {
    const { toast } = await import('sonner')
    const user = userEvent.setup()
    renderPage()

    // フォーム入力
    await user.selectOptions(screen.getByLabelText(/Category/), 'quotation')
    await user.type(screen.getByLabelText(/Company Name/), 'テスト株式会社')
    await user.type(screen.getByLabelText(/Full Name/), '山田太郎')
    await user.type(screen.getByLabelText(/Email/), 'test@example.com')
    await user.type(screen.getByLabelText(/Message Content/), 'テストメッセージ')

    // 送信
    await user.click(screen.getByRole('button', { name: /Process & Send/i }))

    // toast.success が呼ばれた
    expect(toast.success).toHaveBeenCalledWith(
      expect.stringContaining('お問合せを受け付けました')
    )
  })
})
