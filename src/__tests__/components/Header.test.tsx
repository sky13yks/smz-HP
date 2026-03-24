import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { Header } from '@/components/Header'

vi.stubGlobal('scrollTo', vi.fn())

function renderHeader(initialRoute = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <Header />,
        children: [
          { path: '*', element: null },
        ],
      },
    ],
    { initialEntries: [initialRoute] }
  )
  return render(<RouterProvider router={router} />)
}

describe('Header コンポーネント', () => {
  it('ロゴ画像が表示される', () => {
    renderHeader()
    const logo = screen.getByAltText('SHIMIZU SHOKAI')
    expect(logo).toBeInTheDocument()
  })

  it('ナビゲーションリンクが表示される', () => {
    renderHeader()
    expect(screen.getByText('ホーム')).toBeInTheDocument()
    expect(screen.getByText('事業内容')).toBeInTheDocument()
    expect(screen.getByText('会社情報')).toBeInTheDocument()
    expect(screen.getByText('Matrix')).toBeInTheDocument()
    expect(screen.getByText('技術資料')).toBeInTheDocument()
    expect(screen.getByText('沿革')).toBeInTheDocument()
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument()
  })

  it('在庫一覧リンクが外部リンクとして存在する', () => {
    renderHeader()
    const inventoryLinks = screen.getAllByText('在庫一覧')
    const desktopLink = inventoryLinks[0]
    expect(desktopLink.closest('a')).toHaveAttribute('target', '_blank')
    expect(desktopLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('モバイルメニューボタンにaria-labelがある', () => {
    renderHeader()
    const menuButton = screen.getByRole('button', { name: /メニューを開く/ })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('モバイルメニューボタンをクリックでメニューが開きaria-expandedが変わる', async () => {
    renderHeader()
    const user = userEvent.setup()

    const menuButton = screen.getByRole('button', { name: /メニューを開く/ })
    await user.click(menuButton)

    // aria-expanded が true に
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    // メニューが開いてナビリンクが2セット表示
    const homeLinks = screen.getAllByText('ホーム')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
  })
})
