import '@testing-library/jest-dom'

// jsdom に存在しない API のモック
class MockIntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds: ReadonlyArray<number> = []
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
}

globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver

// ResizeObserver モック
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver = MockResizeObserver as unknown as typeof ResizeObserver
