import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { History } from '@/pages/History'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: History }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('History ページ', () => {
  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/沿革/)).toBeInTheDocument()
  })

  it('創業年「1950」がタイムラインに表示される', () => {
    renderPage()
    expect(screen.getByText('1950')).toBeInTheDocument()
  })

  it('創業タイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/個人企業として創業/)).toBeInTheDocument()
  })
})
