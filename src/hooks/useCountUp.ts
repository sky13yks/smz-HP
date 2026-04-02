import { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from './useScrollReveal';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp<T extends HTMLElement>(options: UseCountUpOptions) {
  const { end, duration = 1500, suffix = '' } = options;
  const { ref, isVisible } = useScrollReveal<T>();
  const [displayValue, setDisplayValue] = useState(`0${suffix}`);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // prefers-reduced-motion の場合は即座に最終値
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(`${end}${suffix}`);
      return;
    }

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(easeOutCubic(progress) * end);
      setDisplayValue(`${value}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(`${end}${suffix}`);
      }
    }

    requestAnimationFrame(tick);
  }, [end, duration, suffix]);

  useEffect(() => {
    if (isVisible) animate();
  }, [isVisible, animate]);

  return { ref, displayValue };
}
