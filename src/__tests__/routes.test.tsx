import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { RootLayout } from '@/components/RootLayout'
import { Home } from '@/pages/Home'
import { Company } from '@/pages/Company'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { FAQ } from '@/pages/FAQ'
import { Access } from '@/pages/Access'
import { History } from '@/pages/History'
import { TechSolutions } from '@/pages/TechSolutions'
import { MatrixBrand } from '@/pages/MatrixBrand'
import { NotFound } from '@/pages/NotFound'

vi.stubGlobal('scrollTo', vi.fn())

const routes = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'company', Component: Company },
      { path: 'services', Component: Services },
      { path: 'contact', Component: Contact },
      { path: 'faq', Component: FAQ },
      { path: 'access', Component: Access },
      { path: 'history', Component: History },
      { path: 'tech', Component: TechSolutions },
      { path: 'matrix', Component: MatrixBrand },
      { path: '*', Component: NotFound },
    ],
  },
]

function renderRoute(path: string) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return render(<RouterProvider router={router} />)
}

describe('ルーティング', () => {
  it('/ でホームページが表示される', () => {
    renderRoute('/')
    expect(screen.getByText(/The Resolve/i)).toBeInTheDocument()
  })

  it('/company で会社情報ページが表示される', () => {
    renderRoute('/company')
    const matches = screen.getAllByText(/清水商會/)
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })

  it('/services で事業内容ページが表示される', () => {
    renderRoute('/services')
    const matches = screen.getAllByText(/事業内容/)
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })

  it('/contact でお問い合わせページが表示される', () => {
    renderRoute('/contact')
    const matches = screen.getAllByText(/お問い合わせ/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('/faq でFAQページが表示される', () => {
    renderRoute('/faq')
    const matches = screen.getAllByText(/よくあるご質問/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('/access でアクセスページが表示される', () => {
    renderRoute('/access')
    expect(screen.getAllByText(/アクセス/).length).toBeGreaterThanOrEqual(1)
  })

  it('/history で沿革ページが表示される', () => {
    renderRoute('/history')
    expect(screen.getByText('1950')).toBeInTheDocument()
  })

  it('/tech でニュース & コラムページが表示される', () => {
    renderRoute('/tech')
    expect(screen.getAllByText(/ニュース/).length).toBeGreaterThanOrEqual(1)
  })

  it('/matrix でMatrixページが表示される', () => {
    renderRoute('/matrix')
    const matches = screen.getAllByText(/MATRIX/i)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('未定義ルートで404ページが表示される', () => {
    renderRoute('/nonexistent-page')
    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText(/ページが見つかりません/)).toBeInTheDocument()
  })
})
