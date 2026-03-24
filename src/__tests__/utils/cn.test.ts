import { describe, it, expect } from 'vitest'
import { cn } from '@/components/ui/utils'

describe('cn ユーティリティ関数', () => {
  it('単一のクラス名をそのまま返す', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })

  it('複数のクラス名を結合する', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('Tailwind の競合クラスをマージする', () => {
    const result = cn('px-4', 'px-6')
    expect(result).toBe('px-6')
  })

  it('条件付きクラスを処理する', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible')
  })

  it('undefined や null を無視する', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end')
  })

  it('空の引数で空文字列を返す', () => {
    expect(cn()).toBe('')
  })
})
