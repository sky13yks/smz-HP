import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { NotFound } from '@/pages/NotFound'
import { RootLayout } from '@/components/RootLayout'

vi.stubGlobal('scrollTo', vi.fn())

describe('NotFound (404) ページ', () => {
  it('404メッセージが表示される', () => {
    const router = createMemoryRouter(
      [{ path: '*', element: <NotFound /> }],
      { initialEntries: ['/nonexistent'] }
    )
    render(<RouterProvider router={router} />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('ホームへのリンクがある', () => {
    const router = createMemoryRouter(
      [{ path: '*', element: <NotFound /> }],
      { initialEntries: ['/nonexistent'] }
    )
    render(<RouterProvider router={router} />)
    const homeLink = screen.getByRole('link', { name: /ホームに戻る/ })
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('未定義ルートでNotFoundが表示される（ルーティング統合）', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          Component: RootLayout,
          children: [
            { index: true, element: <div>Home</div> },
            { path: '*', Component: NotFound },
          ],
        },
      ],
      { initialEntries: ['/this-does-not-exist'] }
    )
    render(<RouterProvider router={router} />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
