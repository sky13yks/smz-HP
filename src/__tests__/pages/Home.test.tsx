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
  it('ヒーローテキストが表示される', () => {
    renderPage()
    expect(screen.getByText(/The Resolve/)).toBeInTheDocument()
    expect(screen.getByText(/the World\./)).toBeInTheDocument()
  })

  it('バッジが表示される', () => {
    renderPage()
    expect(screen.getByText(/Est\. 1950/)).toBeInTheDocument()
  })

  it('お問い合わせへのリンクが存在する', () => {
    renderPage()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
