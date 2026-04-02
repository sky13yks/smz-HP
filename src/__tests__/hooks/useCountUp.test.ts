import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useCountUp } from '@/hooks/useCountUp';

beforeEach(() => {
  vi.restoreAllMocks();
  vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: false }));
  vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })));
});

describe('useCountUp', () => {
  it('初期値が "0" + suffix', () => {
    const { result } = renderHook(() => useCountUp<HTMLDivElement>({ end: 75, suffix: '+' }));
    expect(result.current.displayValue).toBe('0+');
  });

  it('ref が返される', () => {
    const { result } = renderHook(() => useCountUp<HTMLDivElement>({ end: 75 }));
    expect(result.current.ref).toBeDefined();
  });

  it('suffix なしの初期値が "0"', () => {
    const { result } = renderHook(() => useCountUp<HTMLDivElement>({ end: 100 }));
    expect(result.current.displayValue).toBe('0');
  });
});
