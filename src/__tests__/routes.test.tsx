import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { RootLayout } from '@/components/RootLayout'
import { Home } from '@/pages/Home'
import { Company } from '@/pages/Company'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { FAQ } from '@/pages/FAQ'

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
    expect(screen.getByText(/MASTERING/i)).toBeInTheDocument()
  })

  it('/company で会社情報ページが表示される', () => {
    renderRoute('/company')
    // ページ本文に会社名が複数回出現するため getAllBy
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
    // Header のリンクと合わせて1つ以上あれば OK
    const matches = screen.getAllByText(/お問い合わせ/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('/faq でFAQページが表示される', () => {
    renderRoute('/faq')
    // Footer にも「よくあるご質問」リンクがある
    const matches = screen.getAllByText(/よくあるご質問/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
