import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ScrollRevealSection({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: ScrollRevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6'
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
