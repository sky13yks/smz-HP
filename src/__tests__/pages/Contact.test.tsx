import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Contact } from '@/pages/Contact'

vi.stubGlobal('scrollTo', vi.fn())

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

  it('フォームの必須フィールドが存在する', () => {
    renderPage()
    // カテゴリ選択
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(1)
    // テキスト入力
    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBeGreaterThanOrEqual(1)
  })

  it('送信ボタンが表示される', () => {
    renderPage()
    const submitButton = screen.getByRole('button', { name: /Process & Send/i })
    expect(submitButton).toBeInTheDocument()
  })
})
