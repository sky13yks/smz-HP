import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

beforeEach(() => {
  vi.restoreAllMocks();
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
  vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })));
});

describe('useScrollReveal', () => {
  it('初期状態で isVisible が false', () => {
    const { result } = renderHook(() => useScrollReveal<HTMLDivElement>());
    expect(result.current.isVisible).toBe(false);
  });

  it('ref が返される', () => {
    const { result } = renderHook(() => useScrollReveal<HTMLDivElement>());
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });

  it('prefers-reduced-motion: reduce の場合は即座に isVisible が true', () => {
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    const { result } = renderHook(() => useScrollReveal<HTMLDivElement>());
    expect(result.current.isVisible).toBe(true);
  });
});
