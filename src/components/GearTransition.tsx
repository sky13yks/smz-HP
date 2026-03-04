import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type TransitionStatus = 'IDLE' | 'SHUTTER_IN' | 'PROCESSING' | 'SHUTTER_OUT';

export const GearTransition: React.FC = () => {
    const [status, setStatus] = useState<TransitionStatus>('IDLE');
    const location = useLocation();
    const prevLocation = useRef(location.pathname);

    useEffect(() => {
        if (prevLocation.current !== location.pathname) {
            if (location.pathname !== '/matrix' && prevLocation.current !== '/matrix') {
                handleTransition();
            }
            prevLocation.current = location.pathname;
        }
    }, [location]);

    const handleTransition = () => {
        setStatus('SHUTTER_IN');

        // Phase 1: Close Shutter (0.5s)
        setTimeout(() => {
            setStatus('PROCESSING');
        }, 500);

        // Phase 2: Show Animation (1.5s)
        setTimeout(() => {
            setStatus('SHUTTER_OUT');
        }, 2200);

        // Phase 3: Open Shutter & Cleanup
        setTimeout(() => {
            setStatus('IDLE');
        }, 2700);
    };

    if (status === 'IDLE') return null;

    return (
        <div className="fixed inset-0 z-[200] pointer-events-auto flex items-center justify-center overflow-hidden">

            {/* Split Shutter - Top Half */}
            <div className={`absolute top-0 left-0 w-full h-1/2 bg-slate-950 border-b border-blue-900/30 transition-transform duration-500 ease-in-out
                ${(status === 'PROCESSING' || status === 'SHUTTER_OUT') ? 'translate-y-0' :
                    status === 'SHUTTER_IN' ? 'translate-y-0' : '-translate-y-full'}`} />

            {/* Split Shutter - Bottom Half */}
            <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-slate-950 border-t border-blue-900/30 transition-transform duration-500 ease-in-out
                ${(status === 'PROCESSING' || status === 'SHUTTER_OUT') ? 'translate-y-0' :
                    status === 'SHUTTER_IN' ? 'translate-y-0' : 'translate-y-full'}`} />

            {/* Main Animation Layer */}
            <div className={`relative z-10 w-full h-full flex flex-col items-center justify-center transition-opacity duration-300
                ${status === 'PROCESSING' ? 'opacity-100' : 'opacity-0'}`}>

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 blueprint-grid opacity-20" />

                {/* Visual Content */}
                <div className="relative z-20 w-full max-w-6xl px-12">

                    {/* Header: Machine Status */}
                    <div className="absolute top-[-120px] left-0 w-full flex justify-between items-end border-b border-blue-500/30 pb-4 font-mono">
                        <div className="space-y-1">
                            <div className="text-blue-500 text-xs font-bold flex items-center gap-3">
                                <span className="w-3 h-3 bg-blue-500 animate-pulse rounded-full" />
                                <span>SYSTEM_RE-SYNC_IN_PROGRESS</span>
                            </div>
                            <div className="text-[10px] text-slate-500 italic">TASK: LOADING_{location.pathname.replace('/', '').toUpperCase() || 'HOME'}</div>
                        </div>
                        <div className="text-right text-[10px] text-slate-400 font-mono">
                            <div>CLOCK: {new Date().toLocaleTimeString()}</div>
                            <div>BUFFER: OK</div>
                        </div>
                    </div>

                    {/* Main Engineering Assembly */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-12">
                        {/* 1. Spur */}
                        <GearSection title="Spur System" color="blue" subtitle="Module 2.5 Precision">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-spin-6s">
                                <EngineeringGear teeth={12} radius={45} />
                            </svg>
                        </GearSection>

                        {/* 2. Bevel */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 perspective-1000 transform-style-3d">
                                <div className="absolute inset-0 rotate-x-60">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400 animate-spin-4s">
                                        <EngineeringGear teeth={14} radius={45} />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 rotate-y-90 translate-x-[-15%]">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500 animate-spin-reverse-4s">
                                        <EngineeringGear teeth={14} radius={45} />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-8 text-center text-orange-500 text-[10px] font-bold tracking-widest uppercase">Bevel Pair 1:1</div>
                        </div>

                        {/* 3. Worm */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32">
                                <div className="absolute top-0 left-0 w-full h-6 bg-slate-900 border border-emerald-900/50 rounded overflow-hidden">
                                    <div className="flex animate-worm-move h-full">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className="min-w-[12px] h-full border-r border-emerald-500/10 rotate-12" />
                                        ))}
                                    </div>
                                </div>
                                <svg viewBox="0 0 100 100" className="absolute top-8 left-0 w-full h-24 text-emerald-500 animate-spin-15s">
                                    <EngineeringGear teeth={28} radius={48} innerRadius={35} />
                                </svg>
                            </div>
                            <div className="mt-6 text-center text-emerald-500 text-[10px] font-bold tracking-widest uppercase">Worm Reduction</div>
                        </div>

                        {/* 4. Rack */}
                        <div className="flex flex-col items-center">
                            <div className="relative w-32 h-32 flex flex-col justify-end">
                                <svg viewBox="0 0 100 100" className="w-16 h-16 text-rose-500 animate-spin-4s mb-[-2px]">
                                    <EngineeringGear teeth={10} radius={40} />
                                </svg>
                                <div className="w-full h-4 bg-slate-900 border-y border-rose-900/30 overflow-hidden relative">
                                    <div className="flex animate-rack-move absolute left-0 bottom-0 h-full">
                                        {[...Array(20)].map((_, i) => (
                                            <div key={i} className="min-w-[8px] h-full bg-rose-500/10 border-r border-rose-900/30" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-center text-rose-500 text-[10px] font-bold tracking-widest uppercase">Linear G01 Feed</div>
                        </div>
                    </div>

                    {/* Footer: Tech Stream */}
                    <div className="absolute bottom-[-120px] left-0 w-full border-t border-slate-800 pt-4 font-mono text-[8px] text-slate-600 flex justify-between">
                        <div className="flex gap-4">
                            <span className="text-blue-500/50 uppercase">Sync_Stream:</span>
                            <span className="animate-pulse">MT_DATA_READY...</span>
                            <span className="hidden md:inline">AXIS_CALIBRATED_X45.001 Y-12.882 Z0.000</span>
                        </div>
                        <div className="text-blue-500/40">V.4.0.2-RELEASE</div>
                    </div>
                </div>

                {/* Vertical Scanning Line */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden origin-top animate-scan-line">
                    <div className="w-full h-[1px] bg-blue-400/20 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
                </div>
            </div>

            <style>{`
                .blueprint-grid {
                    background-image: 
                        linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
                    background-size: 30px 30px;
                }
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-x-60 { transform: rotateX(60deg); }
                .rotate-y-90 { transform: rotateY(90deg) rotateZ(45deg); }
                
                @keyframes spin-linear { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                .animate-spin-6s { animation: spin-linear 6s linear infinite; }
                .animate-spin-4s { animation: spin-linear 4s linear infinite; }
                .animate-spin-15s { animation: spin-linear 15s linear infinite; }
                .animate-spin-reverse-4s { animation: spin-reverse 4s linear infinite; }
                @keyframes worm-move { from { transform: translateX(0); } to { transform: translateX(-12px); } }
                .animate-worm-move { animation: worm-move 0.6s linear infinite; }
                @keyframes rack-move { from { transform: translateX(0); } to { transform: translateX(-8px); } }
                .animate-rack-move { animation: rack-move 0.8s linear infinite; }
                @keyframes scan-line { from { transform: translateY(-100%); } to { transform: translateY(200%); } }
                .animate-scan-line { animation: scan-line 3s linear infinite; }
            `}</style>
        </div>
    );
};

const GearSection: React.FC<{ title: string; subtitle: string; color: string; children: React.ReactNode }> = ({ title, subtitle, color, children }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
            {children}
            <div className={`absolute inset-0 bg-${color}-500/5 rounded-full blur-xl -z-10`} />
        </div>
        <div className="mt-8 text-center">
            <div className={`text-${color}-400 text-[10px] font-bold tracking-widest uppercase mb-1`}>{title}</div>
            <div className="text-[8px] text-slate-600 font-mono italic">{subtitle}</div>
        </div>
    </div>
);

const EngineeringGear: React.FC<{ teeth: number; radius: number; innerRadius?: number }> = ({
    teeth, radius, innerRadius = 32
}) => {
    const paths = [];
    const toothWidth = 0.05;

    for (let i = 0; i < teeth; i++) {
        const startRad = (i / teeth) * 2 * Math.PI;
        const midRad = ((i + 0.5) / teeth) * 2 * Math.PI;
        const endRad = ((i + 1) / teeth) * 2 * Math.PI;

        const x1 = 50 + innerRadius * Math.cos(startRad);
        const y1 = 50 + innerRadius * Math.sin(startRad);
        const x2 = 50 + radius * Math.cos(startRad + toothWidth);
        const y2 = 50 + radius * Math.sin(startRad + toothWidth);
        const x3 = 50 + radius * Math.cos(midRad - toothWidth);
        const y3 = 50 + radius * Math.sin(midRad - toothWidth);
        const x4 = 50 + innerRadius * Math.cos(midRad);
        const y4 = 50 + innerRadius * Math.sin(midRad);

        paths.push(`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4}`);
    }

    return (
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d={paths.join(' ')} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="50" r={radius} strokeWidth="0.2" strokeDasharray="1 1" opacity="0.3" />
            <circle cx="50" cy="50" r={innerRadius} strokeWidth="0.2" strokeDasharray="1 1" opacity="0.3" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
        </g>
    );
};
