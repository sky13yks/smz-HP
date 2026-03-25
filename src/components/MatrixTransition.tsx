import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MatrixTransition: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'ACTIVE'>('IDLE');
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      if (location.pathname === '/matrix') {
        setStatus('ACTIVE');
        const timer = setTimeout(() => setStatus('IDLE'), 1200);
        return () => clearTimeout(timer);
      }
      prevLocation.current = location.pathname;
    }
  }, [location]);

  if (status === 'IDLE') return null;

  return (
    <div className="fixed inset-0 z-[110] bg-background flex items-center justify-center pointer-events-auto">
      <p className="font-serif text-3xl tracking-[0.3em] text-matrix-green animate-reveal">
        MATRIX
      </p>
    </div>
  );
};
