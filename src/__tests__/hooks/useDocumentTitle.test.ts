import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

vi.stubGlobal('scrollTo', vi.fn())

describe('useDocumentTitle フック', () => {
  it('ページタイトルを設定する', () => {
    renderHook(() => useDocumentTitle('テストページ'))
    expect(document.title).toBe('テストページ | 株式会社清水商會')
  })

  it('サフィックスを含むタイトルが設定される', () => {
    renderHook(() => useDocumentTitle('会社情報'))
    expect(document.title).toBe('会社情報 | 株式会社清水商會')
  })

  it('空文字の場合はデフォルトタイトルになる', () => {
    renderHook(() => useDocumentTitle(''))
    expect(document.title).toBe('株式会社清水商會')
  })
})
