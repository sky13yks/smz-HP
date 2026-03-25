import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const TechSolutions: React.FC = () => {
    useDocumentTitle('技術資料');
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
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-none">
                            TECH <br />
                            <span className="text-primary">Resources</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            現場の精度を支える、計算ツールと技術アーカイブ。<br />
                            サブミクロンの世界を制御するためのデジタルリソースを提供します。
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-12 bg-secondary border border-border p-1 rounded-md h-16">
                            <TabsTrigger value="calculators" className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-medium tracking-wider text-sm">Calculators</TabsTrigger>
                            <TabsTrigger value="docs" className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-medium tracking-wider text-sm">Technical Docs</TabsTrigger>
                        </TabsList>

                        <TabsContent value="calculators" className="animate-fade-in mt-0 outline-none">
                            <div className="grid gap-12 md:grid-cols-2">
                                {/* SMZ Calculator */}
                                <div className="bg-card border border-border p-8 md:p-12 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-primary/50" />
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-medium mb-2">SMZ向心度補正</h2>
                                        <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground">Y-Axis Compensation for Hob Sharpeners</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Diameter (mm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={smzInputs.diameter} onChange={e => setSmzInputs({ ...smzInputs, diameter: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Concentricity (μm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={smzInputs.concentricity} onChange={e => setSmzInputs({ ...smzInputs, concentricity: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Form Error (μm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={smzInputs.formError} onChange={e => setSmzInputs({ ...smzInputs, formError: +e.target.value })} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Tip Base (mm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={smzInputs.tipBase} onChange={e => setSmzInputs({ ...smzInputs, tipBase: +e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Root Base (mm)</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={smzInputs.rootBase} onChange={e => setSmzInputs({ ...smzInputs, rootBase: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSmz} className="w-full mt-6 py-4 bg-primary text-primary-foreground rounded-md font-medium text-sm tracking-wider transition-all">
                                            Execute Calculation
                                        </button>

                                        {smzResult !== null && (
                                            <div className="mt-8 p-6 bg-primary/10 rounded-md border border-primary/20 text-center">
                                                <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">Correction Output (mm)</p>
                                                <div className="text-4xl font-light text-primary font-mono tracking-tighter">
                                                    {smzResult.toFixed(6)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Simple Calculator */}
                                <div className="bg-card border border-border p-8 md:p-12 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-border" />
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-medium mb-2">汎用補正計算</h2>
                                        <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground">Arc Sine Geometric Algorithm</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Diameter</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={simpleInputs.diameter} onChange={e => setSimpleInputs({ ...simpleInputs, diameter: +e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Measured Height</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={simpleInputs.height} onChange={e => setSimpleInputs({ ...simpleInputs, height: +e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="font-mono text-xs tracking-[0.15em] text-muted-foreground ml-1">Base Length</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-12 text-foreground font-mono" value={simpleInputs.base} onChange={e => setSimpleInputs({ ...simpleInputs, base: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSimple} className="w-full mt-6 py-4 bg-secondary border border-border rounded-md font-medium text-sm tracking-wider transition-all hover:bg-secondary/80">
                                            Execute Calculation
                                        </button>

                                        {simpleResult !== null && (
                                            <div className="mt-8 p-6 bg-secondary border border-border rounded-md text-center">
                                                <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-2">Result Output (Units)</p>
                                                <div className="text-4xl font-light text-foreground font-mono tracking-tighter">
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
                                <div className="bg-card border border-border p-8 rounded-lg group cursor-pointer hover:border-primary/30 transition-all duration-500">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-primary text-primary-foreground font-mono text-xs tracking-[0.15em]">New Tech</span>
                                                <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">2026.03.02</span>
                                            </div>
                                            <h3 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">ホブ刃溝研削における向心度の重要性</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                                                歯車工作機械の心臓部とも言えるホブ刃。その再研磨において向心度がいかに仕上がり精度に影響を及ぼすか、補正計算の背景と共に解説します。
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-lg bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-card border border-border p-8 rounded-lg opacity-50 group cursor-not-allowed">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-secondary border border-border text-muted-foreground font-mono text-xs tracking-[0.15em]">Coming Soon</span>
                                                <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground">2026.02.15</span>
                                            </div>
                                            <h3 className="text-2xl font-medium mb-3">チェンジギアーの組合わせ最適化</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
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
