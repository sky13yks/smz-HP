import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Loader2, Info } from "lucide-react";
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import { TOPIC_LABELS } from '@/constants/topics';

interface Article {
    id: string;
    title: string;
    category: string;
    topics: string[];
    publishedAt: string | null;
    articleNumber: string;
}

const CATEGORY_TABS = [
    { id: 'all', label: 'すべて' },
    { id: 'ウィークリー深掘り', label: 'ウィークリー深掘り' },
    { id: 'デイリー/AIニュース', label: 'AIニュース' },
    { id: 'デイリー/IT基礎', label: 'IT基礎' },
];

function formatDate(dateStr: string | null): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export const TechSolutions: React.FC = () => {
    useDocumentTitle('ニュース & コラム');
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'calculators';
    const [articleCategory, setArticleCategory] = useState('all');

    const handleTabChange = (val: string) => {
        setSearchParams({ tab: val });
    };

    // Article state
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (currentTab !== 'docs') return;

        let cancelled = false;
        setLoading(true);
        setError(null);

        fetch('/api/articles')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then(data => {
                if (!cancelled) setArticles(data.articles ?? []);
            })
            .catch(err => {
                console.error('Articles fetch error:', err);
                if (!cancelled) setError('記事の取得に失敗しました');
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => { cancelled = true; };
    }, [currentTab]);

    const filteredArticles = articleCategory === 'all'
        ? articles
        : articles.filter(a => a.category === articleCategory);

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
    const [calcError, setCalcError] = useState<string | null>(null);

    const calculateSmz = () => {
        setCalcError(null);
        const { diameter, concentricity, formError, tipBase, rootBase } = smzInputs;
        const height = (concentricity - formError) / 1000;
        const base = (tipBase - rootBase) / 2;
        if (Math.abs(base) < Number.EPSILON) {
            setCalcError('先端基準と歯元基準の値が同じです。基準差がゼロのため計算できません。');
            setSmzResult(null);
            return;
        }

        const radius = diameter / 2;
        const angle = Math.atan(height / base);
        const result = radius * Math.sin(angle);
        setSmzResult(result);
    };

    const calculateSimple = () => {
        setCalcError(null);
        const { diameter, height, base } = simpleInputs;
        if (Math.abs(base) < Number.EPSILON) {
            setCalcError('基準長さがゼロのため計算できません。');
            setSimpleResult(null);
            return;
        }

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
                        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-none">
                            ニュース & コラム
                        </h1>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            現場の精度を支える、計算ツールと技術アーカイブ。
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <ScrollRevealSection><div className="container mx-auto px-6 max-w-6xl">
                    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-12 bg-secondary border border-border p-1 rounded-lg h-14">
                            <TabsTrigger value="calculators" className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-medium tracking-wider text-sm">計算ツール</TabsTrigger>
                            <TabsTrigger value="docs" className="rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-medium tracking-wider text-sm">記事一覧</TabsTrigger>
                        </TabsList>

                        <TabsContent value="calculators" className="animate-fade-in mt-0 outline-none">
                            {/* ツール概要説明 */}
                            <div className="bg-secondary border border-border rounded-xl p-6 mb-10 flex gap-4 items-start">
                                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-muted-foreground leading-relaxed">
                                    <p className="mb-2">
                                        ホブ刃溝研削において、ホブの向心度（振れ）は仕上がり精度に直結します。
                                        以下のツールは、向心度の計測値からY軸の補正量を算出するためのものです。
                                    </p>
                                    <p>
                                        <strong className="text-foreground">SMZ向心度補正</strong>は、向心度・形状誤差・先端/歯元基準の計測値から補正量を自動計算します。
                                        <strong className="text-foreground">汎用補正計算</strong>は、直径・高さ・基準長さを直接入力して逆正弦幾何計算を行うシンプルモードです。
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-10 md:grid-cols-2">
                                {/* SMZ Calculator */}
                                <div className="bg-card border border-border p-8 md:p-10 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-primary/50" />
                                    <div className="mb-8">
                                        <h2 className="text-xl font-medium mb-2">SMZ向心度補正</h2>
                                        <p className="text-xs text-muted-foreground">ホブ刃溝研削用 Y軸補正計算</p>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-muted-foreground ml-1">直径 (mm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={smzInputs.diameter} onChange={e => setSmzInputs({ ...smzInputs, diameter: +e.target.value })} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-muted-foreground ml-1">向心度 (μm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={smzInputs.concentricity} onChange={e => setSmzInputs({ ...smzInputs, concentricity: +e.target.value })} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-muted-foreground ml-1">形状誤差 (μm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={smzInputs.formError} onChange={e => setSmzInputs({ ...smzInputs, formError: +e.target.value })} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label className="text-xs text-muted-foreground ml-1">先端基準 (mm)</Label>
                                                <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={smzInputs.tipBase} onChange={e => setSmzInputs({ ...smzInputs, tipBase: +e.target.value })} />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-xs text-muted-foreground ml-1">歯元基準 (mm)</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={smzInputs.rootBase} onChange={e => setSmzInputs({ ...smzInputs, rootBase: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSmz} className="w-full mt-4 py-3.5 bg-primary text-primary-foreground rounded-md font-medium text-sm tracking-wider transition-all">
                                            計算する
                                        </button>

                                        {calcError && !simpleResult && (
                                            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                                                {calcError}
                                            </div>
                                        )}

                                        {smzResult !== null && (
                                            <div className="mt-6 p-5 bg-primary/10 rounded-lg border border-primary/20 text-center">
                                                <p className="text-xs text-primary mb-2">補正値 (mm)</p>
                                                <div className="text-3xl font-light text-primary font-mono tracking-tighter">
                                                    {smzResult.toFixed(6)}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 計算式の説明 */}
                                    <div className="mt-8 pt-6 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong className="text-foreground/70">計算式:</strong> 高さ = (向心度 − 形状誤差) / 1000、基準 = (先端基準 − 歯元基準) / 2、補正値 = 半径 × sin(arctan(高さ / 基準))
                                        </p>
                                    </div>
                                </div>

                                {/* Simple Calculator */}
                                <div className="bg-card border border-border p-8 md:p-10 rounded-xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-px bg-border" />
                                    <div className="mb-8">
                                        <h2 className="text-xl font-medium mb-2">汎用補正計算</h2>
                                        <p className="text-xs text-muted-foreground">逆正弦幾何計算（シンプルモード）</p>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="space-y-1.5">
                                            <Label className="text-xs text-muted-foreground ml-1">直径 (mm)</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={simpleInputs.diameter} onChange={e => setSimpleInputs({ ...simpleInputs, diameter: +e.target.value })} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-xs text-muted-foreground ml-1">計測高さ (mm)</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={simpleInputs.height} onChange={e => setSimpleInputs({ ...simpleInputs, height: +e.target.value })} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-xs text-muted-foreground ml-1">基準長さ (mm)</Label>
                                            <Input type="number" className="bg-secondary border-border rounded-md h-11 text-foreground font-mono text-sm" value={simpleInputs.base} onChange={e => setSimpleInputs({ ...simpleInputs, base: +e.target.value })} />
                                        </div>

                                        <button onClick={calculateSimple} className="w-full mt-4 py-3.5 bg-secondary border border-border rounded-md font-medium text-sm tracking-wider transition-all hover:bg-secondary/80">
                                            計算する
                                        </button>

                                        {calcError && !smzResult && (
                                            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                                                {calcError}
                                            </div>
                                        )}

                                        {simpleResult !== null && (
                                            <div className="mt-6 p-5 bg-secondary border border-border rounded-lg text-center">
                                                <p className="text-xs text-muted-foreground mb-2">計算結果 (mm)</p>
                                                <div className="text-3xl font-light text-foreground font-mono tracking-tighter">
                                                    {simpleResult.toFixed(6)}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* 計算式の説明 */}
                                    <div className="mt-8 pt-6 border-t border-border">
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            <strong className="text-foreground/70">計算式:</strong> 補正値 = (直径 / 2) × sin(arctan(計測高さ / 基準長さ))
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            SMZ補正計算の中間値が既に分かっている場合や、独自の計測方法で得た数値を直接入力したい場合にご利用ください。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="docs" className="animate-fade-in mt-0 outline-none">
                            {/* Category filter */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {CATEGORY_TABS.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setArticleCategory(tab.id)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium tracking-wider transition-all duration-300 ${
                                            articleCategory === tab.id
                                                ? 'bg-primary text-primary-foreground'
                                                : 'border border-border text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Loading */}
                            {loading && (
                                <div className="flex items-center justify-center py-20">
                                    <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                                    <span className="ml-3 text-sm text-muted-foreground">記事を読み込み中...</span>
                                </div>
                            )}

                            {/* Error */}
                            {error && !loading && (
                                <div className="text-center py-20">
                                    <p className="text-sm text-muted-foreground">{error}</p>
                                    <p className="text-xs text-muted-foreground mt-2">しばらく経ってから再度お試しください。</p>
                                </div>
                            )}

                            {/* Empty */}
                            {!loading && !error && filteredArticles.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-sm text-muted-foreground">公開中の記事はまだありません。</p>
                                </div>
                            )}

                            {/* Article list */}
                            {!loading && !error && filteredArticles.length > 0 && (
                                <div className="grid gap-6">
                                    {filteredArticles.map(article => (
                                        <Link
                                            key={article.id}
                                            to={`/tech/articles/${article.id}`}
                                            className="block bg-card border border-border p-6 md:p-8 rounded-xl group hover:border-primary/30 transition-all duration-500"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                        {article.category && (
                                                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider rounded">
                                                                {article.category}
                                                            </span>
                                                        )}
                                                        {article.publishedAt && (
                                                            <span className="text-xs text-muted-foreground">
                                                                {formatDate(article.publishedAt)}
                                                            </span>
                                                        )}
                                                        {article.articleNumber && (
                                                            <span className="text-xs text-muted-foreground">
                                                                #{article.articleNumber}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-lg md:text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    {article.topics.length > 0 && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {article.topics.map(topic => (
                                                                <span
                                                                    key={topic}
                                                                    className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded"
                                                                >
                                                                    {TOPIC_LABELS[topic] ?? topic}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500">
                                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div></ScrollRevealSection>
            </section>
        </div>
    );
};
