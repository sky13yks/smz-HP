import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Home } from '@/pages/Home'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: Home }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Home ページ', () => {
  it('ヒーローテキスト「MASTERING THE MICRON.」が表示される', () => {
    renderPage()
    expect(screen.getByText(/MASTERING/)).toBeInTheDocument()
    expect(screen.getByText(/THE MICRON/)).toBeInTheDocument()
  })

  it('サービスセクションが表示される', () => {
    renderPage()
    expect(screen.getByText(/Precision Engineering/i)).toBeInTheDocument()
  })

  it('お問い合わせへのリンクが存在する', () => {
    renderPage()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
