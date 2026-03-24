import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import ScrollToTop from '@/components/ScrollToTop'

const scrollToMock = vi.fn()
vi.stubGlobal('scrollTo', scrollToMock)

describe('ScrollToTop コンポーネント', () => {
  it('ルート変更時に window.scrollTo(0, 0) を呼ぶ', () => {
    scrollToMock.mockClear()
    const router = createMemoryRouter(
      [{ path: '*', element: <ScrollToTop /> }],
      { initialEntries: ['/'] }
    )
    render(<RouterProvider router={router} />)
    expect(scrollToMock).toHaveBeenCalledWith(0, 0)
  })

  it('何もレンダリングしない', () => {
    const router = createMemoryRouter(
      [{ path: '*', element: <ScrollToTop /> }],
      { initialEntries: ['/'] }
    )
    const { container } = render(<RouterProvider router={router} />)
    // ScrollToTop は null を返す
    expect(container.innerHTML).toBe('')
  })
})
