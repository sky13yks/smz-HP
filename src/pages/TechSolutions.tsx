import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export const TechSolutions: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'calculators';

    const handleTabChange = (val: string) => {
        setSearchParams({ tab: val });
    };

    // SMZ Calculator State
    const [smzInputs, setSmzInputs] = useState({
        diameter: 60,
        concentricity: 55.3,
        formError: 9.7,
        tipBase: 55.5,
        rootBase: 51.0
    });
    const [smzResult, setSmzResult] = useState<number | null>(null);

    // Simple Calculator State
    const [simpleInputs, setSimpleInputs] = useState({
        diameter: 60,
        height: 45.6,
        base: 2.25
    });
    const [simpleResult, setSimpleResult] = useState<number | null>(null);

    const calculateSmz = () => {
        const { diameter, concentricity, formError, tipBase, rootBase } = smzInputs;
        const height = (concentricity - formError) / 1000;
        const base = (tipBase - rootBase) / 2;
        if (base === 0) return;

        const radius = diameter / 2;
        const angle = Math.atan(height / base);
        const result = radius * Math.sin(angle);
        setSmzResult(result);
    };

    const calculateSimple = () => {
        const { diameter, height, base } = simpleInputs;
        if (base === 0) return;

        const radius = diameter / 2;
        const angle = Math.atan(height / base);
        const result = radius * Math.sin(angle);
        setSimpleResult(result);
    };

    return (
        <div className="min-h-screen bg-background bg-grid-white">
            {/* Page Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
                            TECH <br />
                            <span className="text-gradient-blue uppercase">Resources</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            現場の精度を支える、計算ツールと技術アーカイブ。<br />
                            サブミクロンの世界を制御するためのデジタルリソースを提供します。
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-12 bg-white/5 border border-white/10 p-1 rounded-2xl h-16">
                            <TabsTrigger value="calculators" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all font-bold tracking-widest uppercase text-xs">Calculators</TabsTrigger>
                            <TabsTrigger value="docs" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all font-bold tracking-widest uppercase text-xs">Technical Docs</TabsTrigger>
                        </TabsList>

                        <TabsContent value="calculators" className="animate-fade-in mt-0 outline-none">
                            <div className="grid gap-12 md:grid-cols-2">
                                {/* SMZ Calculator */}
                                <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/50" />
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-black mb-2 italic">SMZ向心度補正</h2>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Y-Axis Compensation for Hob Sharpeners</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Diameter (mm)</Label>
                                                <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono focus:ring-blue-500/50" value={smzInputs.diameter} onChange={e => setSmzInputs({ ...smzInputs, diameter: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Concentricity (μm)</Label>
                                                <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono focus:ring-blue-500/50" value={smzInputs.concentricity} onChange={e => setSmzInputs({ ...smzInputs, concentricity: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Form Error (μm)</Label>
                                                <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono focus:ring-blue-500/50" value={smzInputs.formError} onChange={e => setSmzInputs({ ...smzInputs, formError: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Tip Base (mm)</Label>
                                                <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono focus:ring-blue-500/50" value={smzInputs.tipBase} onChange={e => setSmzInputs({ ...smzInputs, tipBase: +e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Root Base (mm)</Label>
                                            <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono focus:ring-blue-500/50" value={smzInputs.rootBase} onChange={e => setSmzInputs({ ...smzInputs, rootBase: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSmz} className="w-full mt-6 py-4 bg-blue-600 rounded-xl font-black text-sm tracking-[0.2em] uppercase transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02]">
                                            Execute Calculation
                                        </button>

                                        {smzResult !== null && (
                                            <div className="mt-8 p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 text-center animate-glow">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Correction Output (mm)</p>
                                                <div className="text-4xl font-black text-blue-400 font-mono tracking-tighter">
                                                    {smzResult.toFixed(6)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Simple Calculator */}
                                <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden bg-white/5">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-black mb-2 italic">汎用補正計算</h2>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Arc Sine Geometric Algorithm</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Diameter</Label>
                                            <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono" value={simpleInputs.diameter} onChange={e => setSimpleInputs({ ...simpleInputs, diameter: +e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Measured Height</Label>
                                            <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono" value={simpleInputs.height} onChange={e => setSimpleInputs({ ...simpleInputs, height: +e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Base Length</Label>
                                            <Input type="number" className="bg-white/5 border-white/10 rounded-xl h-12 text-white font-mono" value={simpleInputs.base} onChange={e => setSimpleInputs({ ...simpleInputs, base: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSimple} className="w-full mt-6 py-4 bg-white/10 rounded-xl font-black text-sm tracking-[0.2em] uppercase transition-all hover:bg-white/20">
                                            Execute Calculation
                                        </button>

                                        {simpleResult !== null && (
                                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Result Output (Units)</p>
                                                <div className="text-4xl font-black text-white font-mono tracking-tighter">
                                                    {simpleResult.toFixed(6)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="docs" className="animate-fade-in mt-0 outline-none">
                            <div className="grid gap-8">
                                <div className="glass-panel p-8 rounded-3xl group cursor-pointer hover:border-blue-500/30 transition-all duration-500">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">New Tech</span>
                                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest italic">2026.03.02</span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors">ホブ刃溝研削における向心度の重要性</h3>
                                            <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                                                歯車工作機械の心臓部とも言えるホブ刃。その再研磨において向心度がいかに仕上がり精度に影響を及ぼすか、補正計算の背景と共に解説します。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                                                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-panel p-8 rounded-3xl opacity-50 group cursor-not-allowed">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full italic">Coming Soon</span>
                                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest italic">2026.02.15</span>
                                            </div>
                                            <h3 className="text-2xl font-black mb-3 italic">チェンジギアーの組合わせ最適化</h3>
                                            <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                                                近日公開予定のチェンジギアー掛け換え計算ツールの裏側にある計算ロジックを公開します。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </div>
    );
};

