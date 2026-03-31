import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Services } from '@/pages/Services'

vi.stubGlobal('scrollTo', vi.fn())
vi.stubGlobal('matchMedia', vi.fn().mockImplementation((query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
})))

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: Services }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Services ページ', () => {
  it('3つのサービスが表示される', () => {
    renderPage()
    expect(screen.getByText(/提案・納入/)).toBeInTheDocument()
    expect(screen.getByText(/修理・メンテナンス/)).toBeInTheDocument()
    expect(screen.getByText(/中古機械の売買・再生/)).toBeInTheDocument()
  })

  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/事業内容/)).toBeInTheDocument()
  })
})
