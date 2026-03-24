import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Footer } from '@/components/Footer'

vi.stubGlobal('scrollTo', vi.fn())

function renderFooter(route = '/') {
  const router = createMemoryRouter(
    [{ path: '*', element: <Footer /> }],
    { initialEntries: [route] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Footer コンポーネント', () => {
  it('会社名が表示される', () => {
    renderFooter()
    expect(screen.getByText('株式会社 清水商會')).toBeInTheDocument()
  })

  it('住所が表示される', () => {
    renderFooter()
    expect(screen.getByText(/東京都大田区矢口/)).toBeInTheDocument()
  })

  it('電話番号が表示される', () => {
    renderFooter()
    expect(screen.getByText('TEL: 03-5732-2800')).toBeInTheDocument()
  })

  it('コピーライトが表示される', () => {
    renderFooter()
    expect(screen.getByText(/Shimizu Shokai Co., Ltd/)).toBeInTheDocument()
  })

  it('サイトマップリンクが表示される', () => {
    renderFooter()
    expect(screen.getByText('ホーム')).toBeInTheDocument()
    expect(screen.getByText('事業内容')).toBeInTheDocument()
    expect(screen.getByText('会社情報')).toBeInTheDocument()
    expect(screen.getByText('沿革')).toBeInTheDocument()
  })

  it('Matrixページではスタイルが変わる', () => {
    const { container } = renderFooter('/matrix')
    const footer = container.querySelector('footer')
    expect(footer).toHaveStyle({ backgroundColor: '#0f0f1e' })
  })

  it('通常ページでは通常カラーが適用される', () => {
    const { container } = renderFooter('/')
    const footer = container.querySelector('footer')
    expect(footer).toHaveStyle({ backgroundColor: '#1a2e5a' })
  })
})
