import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Services } from '@/pages/Services'

vi.stubGlobal('scrollTo', vi.fn())

function renderPage() {
  const router = createMemoryRouter(
    [{ path: '/', Component: Services }],
    { initialEntries: ['/'] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Services ページ', () => {
  it('6つのサービスが表示される', () => {
    renderPage()
    expect(screen.getByText(/切削・研削工具/)).toBeInTheDocument()
    expect(screen.getByText(/工作機械の「提案・納入」/)).toBeInTheDocument()
    expect(screen.getByText(/修理・メンテナンス/)).toBeInTheDocument()
    expect(screen.getByText(/中古機械の売買・再生/)).toBeInTheDocument()
    expect(screen.getByText(/機械加工の代行/)).toBeInTheDocument()
    expect(screen.getByText(/輸入・調達/)).toBeInTheDocument()
  })

  it('ページタイトルが表示される', () => {
    renderPage()
    expect(screen.getByText(/事業内容/)).toBeInTheDocument()
  })
})
