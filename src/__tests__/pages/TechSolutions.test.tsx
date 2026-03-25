import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { TechSolutions } from '@/pages/TechSolutions'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage(search = '') {
  const router = createMemoryRouter(
    [{ path: '/', Component: TechSolutions }],
    { initialEntries: [`/${search}`] }
  )
  return render(<RouterProvider router={router} />)
}

describe('TechSolutions ページ', () => {
  it('ページが正常にレンダリングされる', () => {
    renderPage()
    expect(screen.getAllByText(/技術資料/).length).toBeGreaterThanOrEqual(1)
  })

  it('タブコンテンツが存在する', () => {
    const { container } = renderPage()
    const tabs = container.querySelectorAll('[role="tab"]')
    expect(tabs.length).toBeGreaterThan(0)
  })
})
