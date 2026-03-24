import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { MatrixBrand } from '@/pages/MatrixBrand'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: MatrixBrand }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('MatrixBrand ページ', () => {
  it('ページが正常にレンダリングされる', () => {
    renderPage()
    const matches = screen.getAllByText(/MATRIX/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('製品カテゴリが表示される', () => {
    renderPage()
    const matches = screen.getAllByText(/成形研削盤/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
