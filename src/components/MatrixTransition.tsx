import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GEAR_CHARS = '0123456789ABCDEF⚙⛭GEARMODULEHOBMATRIXSHIMIZU';

export const MatrixTransition: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [status, setStatus] = useState<'IDLE' | 'ACTIVE'>('IDLE');
    const location = useLocation();
    const prevLocation = useRef(location.pathname);

    useEffect(() => {
        if (prevLocation.current !== location.pathname) {
            if (location.pathname === '/matrix') {
                handleTransition();
            }
            prevLocation.current = location.pathname;
        }
    }, [location]);

    const handleTransition = () => {
        setStatus('ACTIVE');

        // Block interaction and view for 2 seconds for a complete scene change
        const timer = setTimeout(() => {
            setStatus('IDLE');
        }, 2000);

        return () => clearTimeout(timer);
    };

    useEffect(() => {
        if (status === 'IDLE' || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 16;
        const columns = Math.ceil(canvas.width / fontSize);
        const drops: number[] = new Array(columns).fill(1).map(() => Math.random() * -100);

        let animationId: number;

        const draw = () => {
            // Stronger background to ensure total occlusion
            ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px Courier New`;

            for (let i = 0; i < drops.length; i++) {
                const char = GEAR_CHARS[Math.floor(Math.random() * GEAR_CHARS.length)];

                // Add "Glow" effect for professionalism
                ctx.shadowBlur = 8;
                ctx.shadowColor = "#0F0";

                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                ctx.shadowBlur = 0;

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationId);
    }, [status]);

    if (status === 'IDLE') return null;

    return (
        <div className="fixed inset-0 z-[110] bg-black pointer-events-auto">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
            />
            {/* Professional "Loading System" Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-green-500 bg-black/80 px-8 py-4 font-mono text-green-500 animate-pulse tracking-[0.5em] text-xl">
                    BOOTING_MATRIX_ENVIRONMENT
                </div>
            </div>
        </div>
    );
};
