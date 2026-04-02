import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { RootLayout } from '@/components/RootLayout'

vi.stubGlobal('scrollTo', vi.fn())

function renderWithRouter(initialRoute = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        Component: RootLayout,
        children: [
          { index: true, element: <div>テストページ</div> },
        ],
      },
    ],
    { initialEntries: [initialRoute] }
  )
  return render(<RouterProvider router={router} />)
}

describe('RootLayout コンポーネント', () => {
  it('Header のロゴが表示される', () => {
    renderWithRouter()
    const logos = screen.getAllByAltText('株式会社清水商會')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('子ルートのコンテンツが表示される', () => {
    renderWithRouter()
    expect(screen.getByText('テストページ')).toBeInTheDocument()
  })

  it('Footer が表示される', () => {
    renderWithRouter()
    expect(screen.getByText(/Shimizu Shokai Co., Ltd/)).toBeInTheDocument()
  })

  it('SVGフィルター定義が存在する', () => {
    const { container } = renderWithRouter()
    const filter = container.querySelector('#logo-sharp-alpha')
    expect(filter).toBeInTheDocument()
  })
})
