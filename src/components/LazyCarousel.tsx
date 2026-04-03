import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CarouselImage {
  src: string;
  alt: string;
}

interface LazyCarouselProps {
  images: CarouselImage[];
  label: string;
  interval?: number;
}

export function LazyCarousel({ images, label, interval = 4000 }: LazyCarouselProps) {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  // ビューポートに入ってから自動再生開始
  useEffect(() => {
    if (!isVisible) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible, images.length, interval]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-secondary"
      role="region"
      aria-label={label}
      aria-live="polite"
    >
      <div className="relative w-full">
        {images.map((img, i) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            aria-hidden={i !== current}
            className={`w-full h-auto object-contain transition-opacity duration-1000 ${
              i === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setCurrent(i)}
              aria-label={`スライド ${i + 1}: ${img.alt}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-4' : 'bg-foreground/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
