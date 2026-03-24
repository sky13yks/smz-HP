import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Access } from '@/pages/Access'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: Access }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Access ページ', () => {
  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/LOCATIONS/i)).toBeInTheDocument()
  })

  it('本社住所が表示される', () => {
    renderPage()
    expect(screen.getByText(/東京都大田区矢口/)).toBeInTheDocument()
  })

  it('電話番号が表示される', () => {
    const { container } = renderPage()
    expect(container.textContent).toContain('03.5732.2800')
  })
})
