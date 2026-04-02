import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Shield, Cpu, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import machineImg from "@/assets/matrix_grinder.png";

interface Machine {
    model: string;
    name: string;
    nameEn: string;
    description: string;
    image: string;
    link: string;
}

interface Category {
    id: string;
    title: string;
    titleEn: string;
    description: string;
    machines: Machine[];
}

const categories: Category[] = [
    {
        id: "profile-h",
        title: "成形研削盤（横型）",
        titleEn: "Profile Grinding Machine (Horizontal)",
        description: "砥石を歯車の歯形に合わせた形状に成形（ドレッシング）し、歯面を1枚ずつ研削する方式。高精度な歯形修整が可能で、大モジュールの歯車に適しています。",
        machines: [
            {
                model: "GHP-3540",
                name: "CNCギア成形研削盤",
                nameEn: "CNC Gear Profile Grinding Machine",
                description: "最大加工径350mm・モジュール40。大型歯車の高精度プロファイル研削に対応。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/GHP3540jp.html",
            },
        ],
    },
    {
        id: "profile-v",
        title: "成形研削盤（立型）",
        titleEn: "Profile Grinding Machine (Vertical)",
        description: "ワークを垂直に保持する立型構造。重量の大きなワークや長尺シャフトギアの研削に適し、自重によるたわみの影響を受けにくい設計です。",
        machines: [
            {
                model: "GVP-8040",
                name: "CNC立形歯車成形研削盤",
                nameEn: "CNC Vertical Gear Profile Grinding Machine",
                description: "最大加工径800mm。大型立形構造で重量ワークの高精度研削を実現。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/GVP8040jp.html",
            },
        ],
    },
    {
        id: "generating",
        title: "創成研削盤",
        titleEn: "Generating Grinding Machine",
        description: "ねじ状砥石を用いて歯車と噛み合わせながら連続的に研削する方式。量産性に優れ、小〜中モジュールの歯車を効率的かつ高精度に加工できます。",
        machines: [
            {
                model: "GVC-0500",
                name: "CNC歯車創成研削盤",
                nameEn: "CNC Gear Generating Grinding Machine",
                description: "ねじ状砥石による連続創成研削。量産かつ高精度な加工を両立。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/GVC0500jp.html",
            },
        ],
    },
    {
        id: "worm",
        title: "ウォーム研削盤",
        titleEn: "Worm Grinding Machine",
        description: "ウォームギアの歯面を専用砥石で研削する機械。自動車のステアリングやエレベーター駆動系など、静粛性が求められる駆動系部品に不可欠な加工です。",
        machines: [
            {
                model: "THW-2080",
                name: "CNCウォーム研削盤",
                nameEn: "CNC Worm Grinding Machine",
                description: "外径200mm対応。コンパクトなウォームギアの高精度研削に最適。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/THW2080jp.html",
            },
            {
                model: "THW-3080",
                name: "CNCウォーム研削盤",
                nameEn: "CNC Worm Grinding Machine",
                description: "外径300mm対応。大径ウォームギアの対応が可能な上位モデル。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/THW3080jp.html",
            },
        ],
    },
    {
        id: "hob",
        title: "ホブ刃溝研削盤",
        titleEn: "Hob Flute Grinding Machine",
        description: "ホブカッターの刃溝（フルート）を再研削するための専用機。ホブの精度を維持し、寿命を延ばすために欠かせない工具再研削の中核設備です。",
        machines: [
            {
                model: "ZHS-3040",
                name: "CNCホブ刃溝研削盤",
                nameEn: "CNC Hob Flute Grinding Machine",
                description: "ホブカッターの刃溝を高精度に再研削。工具寿命とコスト最適化に貢献。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/ZHS3040jp.html",
            },
        ],
    },
    {
        id: "bevel",
        title: "ベベルギア歯切盤・研削盤",
        titleEn: "Bevel Gear Cutting & Grinding Machine",
        description: "かさ歯車（ベベルギア）の歯切り・研削を行う機械。自動車のディファレンシャルギアや航空機部品など、複雑な曲線歯面の加工が可能です。",
        machines: [
            {
                model: "GBG-3210",
                name: "CNCベベルギア研削盤",
                nameEn: "CNC Bevel Gear Grinding Machine",
                description: "かさ歯車の高精度曲面研削に対応。静粛性の高い歯面仕上げを実現。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/GBG3210jp.html",
            },
            {
                model: "GBC-3210",
                name: "CNCベベルギア歯切盤",
                nameEn: "CNC Bevel Gear Cutting Machine",
                description: "かさ歯車の歯切加工に対応。研削前の荒加工から高精度仕上げまで。",
                image: "",
                link: "https://www.matrix-machine.tw/jp/GBC3210jp.html",
            },
        ],
    },
];

const tabs = [
    { id: "all",       label: "すべて" },
    { id: "profile-h", label: "成形（横型）" },
    { id: "profile-v", label: "成形（立型）" },
    { id: "generating",label: "創成" },
    { id: "worm",      label: "ウォーム" },
    { id: "hob",       label: "ホブ工具" },
    { id: "bevel",     label: "ベベルギア" },
];

const specs = [
    { label: "創業", value: "1913年（イギリス・コヴェントリー）" },
    { label: "現生産拠点", value: "台湾" },
    { label: "専門分野", value: "歯車研削盤・歯車切削工具" },
    { label: "制御装置", value: "FANUC / SIEMENS" },
    { label: "加工精度", value: "サブミクロン精度" },
    { label: "日本代理", value: "有限会社システムエンジニアリング & 株式会社清水商會" },
];

export const MatrixBrand: React.FC = () => {
    useDocumentTitle('MATRIX 歯車研削盤 | CNC歯車研削・成形研削・創成研削 | 清水商會');
    const [activeTab, setActiveTab] = useState("all");

    const visibleCategories = activeTab === "all"
        ? categories
        : categories.filter(c => c.id === activeTab);

    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-md border border-border bg-secondary mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-matrix-green" />
                                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">英国コヴェントリー創業 1913年</span>
                            </div>

                            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-none mb-8 opacity-90">
                                MATR<span className="text-matrix-green">I</span>X
                            </h1>

                            <p className="text-2xl md:text-3xl font-light mb-8 max-w-xl leading-relaxed text-foreground/80">
                                歯車研削の極致へ。<br />
                                <span className="text-gradient-matrix font-medium">サブミクロン精度の再定義。</span>
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <a
                                    href="https://www.matrix-machine.tw/jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="surface px-10 py-5 rounded-md font-medium text-sm tracking-wider uppercase transition-all duration-500 hover:border-matrix-green/50"
                                >
                                    MATRIX 公式サイト
                                </a>
                            </div>
                        </div>

                        <div className="relative animate-fade-in pointer-events-none pb-8">
                            <img
                                src={machineImg}
                                alt="MATRIX CNC Gear Grinder"
                                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-2 left-4 z-20 surface p-5 rounded-lg shadow-lg">
                                <p className="font-mono text-xs tracking-[0.15em] text-matrix-green uppercase">走査軸精度</p>
                                <p className="text-2xl font-mono text-foreground">±0.0001 mm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Specs */}
            <section className="py-16 border-t border-matrix-green/15">
                <ScrollRevealSection><div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {specs.map((spec, i) => (
                            <div key={i} className="text-center p-4">
                                <div className="font-mono text-xs tracking-[0.15em] mb-2 font-medium text-matrix-green">
                                    {spec.label}
                                </div>
                                <div className="text-sm text-foreground/80">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div></ScrollRevealSection>
            </section>

            {/* Product Lineup by Category */}
            <section className="py-20">
                <ScrollRevealSection><div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-foreground">
                            製品ラインナップ
                        </h2>
                        <div className="w-16 h-0.5 mx-auto mb-4 bg-matrix-green" />
                        <p className="text-sm max-w-2xl mx-auto text-muted-foreground">
                            研削方式・加工対象ごとに分類しています。各製品カードをクリックするとメーカー公式の製品ページが開きます。
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2 rounded-md text-sm font-medium tracking-wider transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-matrix-green text-white'
                                        : 'border border-matrix-green/20 text-muted-foreground hover:text-foreground'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="space-y-16 max-w-6xl mx-auto">
                        {visibleCategories.map((category, ci) => (
                            <div key={ci}>
                                <div className="mb-6 pl-4 border-l-[3px] border-matrix-green">
                                    <h3 className="text-xl md:text-2xl font-medium mb-1 text-foreground">
                                        {category.title}
                                    </h3>
                                    <p className="text-xs tracking-wider font-medium mb-2 text-matrix-green">
                                        {category.titleEn}
                                    </p>
                                    <p className="text-sm leading-relaxed max-w-3xl text-muted-foreground">
                                        {category.description}
                                    </p>
                                </div>

                                <div className={`grid gap-6 ${category.machines.length === 1 ? 'grid-cols-1 max-w-lg' : 'grid-cols-1 sm:grid-cols-2'}`}>
                                    {category.machines.map((machine, mi) => (
                                        <a
                                            key={mi}
                                            href={machine.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block relative rounded-xl overflow-hidden transition-all duration-500 bg-card border border-matrix-green/10 hover:border-matrix-green/50"
                                        >
                                            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                                                {machine.image ? (
                                                    <img
                                                        src={machine.image}
                                                        alt={machine.name}
                                                        className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
                                                        <Cpu size={32} className="text-matrix-green/60" />
                                                        <p className="text-sm font-mono font-medium text-matrix-green">{machine.model}</p>
                                                        <p className="text-xs text-muted-foreground text-center">{machine.name}</p>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-matrix-green/10">
                                                    <ExternalLink size={24} className="text-matrix-green" />
                                                </div>
                                            </div>

                                            <div className="p-5 border-t border-matrix-green/10">
                                                <h4 className="text-lg font-medium mb-1 transition-colors duration-300 text-foreground/80 group-hover:text-foreground">
                                                    {machine.model}
                                                </h4>
                                                <p className="text-xs font-medium mb-2 text-matrix-green">{machine.name}</p>
                                                <p className="text-xs leading-relaxed text-muted-foreground">
                                                    {machine.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div></ScrollRevealSection>
            </section>

            {/* Features */}
            <section className="py-20 bg-secondary">
                <ScrollRevealSection><div className="container mx-auto px-6">
                    <h2 className="text-3xl font-medium text-center mb-16 text-foreground">
                        MATRIXが選ばれる理由
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 rounded-xl text-center bg-card border border-matrix-green/10">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 bg-matrix-green/10">
                                <Shield size={24} className="text-matrix-green" />
                            </div>
                            <h3 className="text-lg font-medium mb-3 text-foreground">100年超の歴史</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                1913年、英国コヴェントリーで創業。百年超のエンジニアリング知見を現代の精密研削技術に継承。
                            </p>
                        </div>

                        <div className="p-8 rounded-xl text-center bg-card border border-matrix-green/10">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 bg-matrix-green/10">
                                <Cpu size={24} className="text-matrix-green" />
                            </div>
                            <h3 className="text-lg font-medium mb-3 text-foreground">サブミクロン精度</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                FANUC・SIEMENS制御による最先端NC制御と、独自開発の対話型ソフトウェア「MATRIWORK」で高精度加工を実現。
                            </p>
                        </div>

                        <div className="p-8 rounded-xl text-center bg-card border border-matrix-green/10">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 bg-matrix-green/10">
                                <Wrench size={24} className="text-matrix-green" />
                            </div>
                            <h3 className="text-lg font-medium mb-3 text-foreground">清水商會のサポート</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                導入前の技術相談から、設置・立ち上げ、稼働後のメンテナンスまで。日本国内のアフターサービスを一貫して対応。
                            </p>
                        </div>
                    </div>
                </div></ScrollRevealSection>
            </section>

            {/* SEO: About MATRIX */}
            <section className="py-20 border-t border-matrix-green/15">
                <ScrollRevealSection><div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-medium mb-8 text-foreground">
                        MATRIX Precision Machines について
                    </h2>
                    <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
                        <p>
                            <strong className="text-foreground">MATRIX（マトリックス）</strong>は、1913年に英国コヴェントリーで創業した歯車研削盤の専門メーカーです。
                            100年以上にわたり蓄積された歯車加工技術を基盤に、CNC歯車研削盤・CNC歯車成形研削盤・CNC創成研削盤・CNCウォーム研削盤・ベベルギア研削盤・ホブ刃溝研削盤など、
                            歯車製造に必要なあらゆる研削工程をカバーする製品群を提供しています。
                        </p>
                        <p>
                            現在の生産拠点は台湾に置き、FANUC・SIEMENS両社のCNC制御に対応。
                            独自開発の対話型ソフトウェア「MATRIWORK」により、複雑な歯形修整プログラムの作成を効率化しています。
                            走査軸精度±0.0001mmのサブミクロン精度は、自動車のトランスミッション、航空機のギアボックス、産業用ロボットの減速機など、
                            高い静粛性と耐久性が求められる歯車部品の仕上げ研削に最適です。
                        </p>
                        <p>
                            株式会社清水商會は、MATRIX製品の日本国内における代理店として、導入前の技術相談・加工テスト（テストカット）の手配から、
                            据付・立ち上げ支援、稼働後の定期メンテナンス・修理対応まで、一貫したアフターサービスを提供しています。
                            歯車研削盤の新規導入、既存設備のリプレイス、中古MATRIX機械の調達など、お気軽にご相談ください。
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "歯車研削盤", "CNC研削盤", "成形研削", "創成研削",
                            "ウォーム研削", "ベベルギア", "ホブ刃溝研削", "歯車加工",
                        ].map(keyword => (
                            <span key={keyword} className="px-3 py-1.5 bg-secondary rounded text-xs text-muted-foreground text-center">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div></ScrollRevealSection>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-matrix-green/15">
                <ScrollRevealSection><div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-medium mb-4 text-foreground">
                        MATRIX製品に関するお問い合わせ
                    </h2>
                    <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
                        仕様の確認、見積り依頼、デモのご相談など、お気軽にご連絡ください。<br />
                        MATRIX製品に精通した担当者が対応いたします。
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-md font-medium tracking-wider transition-all duration-300 bg-matrix-green text-foreground"
                    >
                        お問い合わせフォームへ
                        <ArrowRight size={18} />
                    </Link>
                </div></ScrollRevealSection>
            </section>
        </div>
    );
};
