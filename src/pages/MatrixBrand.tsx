import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Shield, Cpu, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

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
                link: "https://www.matrix-machine.tw/jp/THW2080jp.html",
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

import machineImg from "../assets/matrix_grinder.png";

export const MatrixBrand: React.FC = () => {
    const [activeTab, setActiveTab] = useState("all");

    const visibleCategories = activeTab === "all"
        ? categories
        : categories.filter(c => c.id === activeTab);

    return (
        <div className="min-h-screen bg-background text-foreground bg-grid-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-matrix-green/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                                <span className="flex h-2 w-2 rounded-full bg-matrix-green animate-pulse" />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Coventry - Since 1913</span>
                            </div>

                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 opacity-90">
                                MATR<span className="text-matrix-green">I</span>X
                            </h1>

                            <p className="text-2xl md:text-3xl font-light mb-8 max-w-xl leading-relaxed text-white/80">
                                歯車研削の極致へ。<br />
                                <span className="text-gradient-green font-bold">サブミクロン精度の再定義。</span>
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <a
                                    href="https://www.matrix-machine.tw/jp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-panel group px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(58,181,74,0.3)] hover:border-matrix-green/50"
                                >
                                    Explore Technology
                                </a>
                            </div>
                        </div>

                        <div className="relative animate-fade-in group pointer-events-none">
                            <div className="absolute inset-0 bg-matrix-green/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                            <img
                                src={machineImg}
                                alt="MATRIX CNC Gear Grinder"
                                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl animate-pulse">
                                <p className="text-[10px] font-mono tracking-widest text-matrix-green uppercase">Scanning Axis Accuracy</p>
                                <p className="text-2xl font-mono text-white">±0.0001 mm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Specs */}
            <section className="py-16" style={{ borderTop: '1px solid rgba(73, 169, 66, 0.15)' }}>
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {specs.map((spec, i) => (
                            <div key={i} className="text-center p-4">
                                <div className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#49a942' }}>
                                    {spec.label}
                                </div>
                                <div className="text-sm" style={{ color: '#c0c0c8' }}>
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Lineup by Category */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#fff' }}>
                            製品ラインナップ
                        </h2>
                        <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: '#49a942' }} />
                        <p className="text-sm max-w-2xl mx-auto" style={{ color: '#8a8aad' }}>
                            研削方式・加工対象ごとに分類しています。各製品カードをクリックするとメーカー公式の製品ページが開きます。
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
                                style={activeTab === tab.id ? {
                                    backgroundColor: '#49a942',
                                    color: '#fff',
                                    boxShadow: '0 0 16px rgba(73,169,66,0.4)',
                                } : {
                                    backgroundColor: 'transparent',
                                    color: '#8a8aad',
                                    border: '1px solid rgba(73,169,66,0.25)',
                                }}
                                onMouseEnter={e => {
                                    if (activeTab !== tab.id)
                                        (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    if (activeTab !== tab.id)
                                        (e.currentTarget as HTMLButtonElement).style.color = '#8a8aad';
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="space-y-16 max-w-6xl mx-auto">
                        {visibleCategories.map((category, ci) => (
                            <div key={ci}>
                                <div className="mb-6 pl-4" style={{ borderLeft: '3px solid #49a942' }}>
                                    <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ color: '#fff' }}>
                                        {category.title}
                                    </h3>
                                    <p className="text-xs tracking-wider font-medium mb-2" style={{ color: '#49a942' }}>
                                        {category.titleEn}
                                    </p>
                                    <p className="text-sm leading-relaxed max-w-3xl" style={{ color: '#8a8aad' }}>
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
                                            className="group block relative rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(73,169,66,0.15)]"
                                            style={{
                                                backgroundColor: '#1a1a2e',
                                                border: '1px solid rgba(73, 169, 66, 0.1)',
                                            }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(73, 169, 66, 0.5)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(73, 169, 66, 0.1)'; }}
                                        >
                                            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
                                                <img
                                                    src={machine.image}
                                                    alt={machine.name}
                                                    className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-105"
                                                    onError={e => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const parent = target.parentElement;
                                                        if (parent) {
                                                            parent.style.backgroundColor = '#252540';
                                                            parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#49a942;font-size:0.85rem;text-align:center;padding:1.5rem;line-height:1.6;">${machine.model}<br/>${machine.name}</div>`;
                                                        }
                                                    }}
                                                />
                                                <div
                                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ backgroundColor: 'rgba(73, 169, 66, 0.08)' }}
                                                >
                                                    <ExternalLink size={24} style={{ color: '#49a942' }} />
                                                </div>
                                            </div>

                                            <div className="p-5" style={{ borderTop: '1px solid rgba(73, 169, 66, 0.1)' }}>
                                                <h4 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-white" style={{ color: '#c0c0c8' }}>
                                                    {machine.model}
                                                </h4>
                                                <p className="text-xs font-medium mb-2" style={{ color: '#49a942' }}>{machine.name}</p>
                                                <p className="text-xs leading-relaxed" style={{ color: '#6a6a8a' }}>
                                                    {machine.description}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20" style={{ backgroundColor: '#141428' }}>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16" style={{ color: '#fff' }}>
                        MATRIXが選ばれる理由
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(73, 169, 66, 0.1)' }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(73, 169, 66, 0.1)' }}>
                                <Shield size={24} style={{ color: '#49a942' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ color: '#fff' }}>100年超の歴史</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#8a8aad' }}>
                                1913年、英国コヴェントリーで創業。百年超のエンジニアリング知見を現代の精密研削技術に継承。
                            </p>
                        </div>

                        <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(73, 169, 66, 0.1)' }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(73, 169, 66, 0.1)' }}>
                                <Cpu size={24} style={{ color: '#49a942' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ color: '#fff' }}>サブミクロン精度</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#8a8aad' }}>
                                FANUC・SIEMENS制御による最先端NC制御と、独自開発の対話型ソフトウェア「MATRIWORK」で高精度加工を実現。
                            </p>
                        </div>

                        <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#1a1a2e', border: '1px solid rgba(73, 169, 66, 0.1)' }}>
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(73, 169, 66, 0.1)' }}>
                                <Wrench size={24} style={{ color: '#49a942' }} />
                            </div>
                            <h3 className="text-lg font-bold mb-3" style={{ color: '#fff' }}>清水商會のサポート</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#8a8aad' }}>
                                導入前の技術相談から、設置・立ち上げ、稼働後のメンテナンスまで。日本国内のアフターサービスを一貫して対応。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ borderTop: '1px solid rgba(73, 169, 66, 0.15)' }}>
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#fff' }}>
                        MATRIX製品に関するお問い合わせ
                    </h2>
                    <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#8a8aad' }}>
                        仕様の確認、見積り依頼、デモのご相談など、お気軽にご連絡ください。<br />
                        MATRIX製品に精通した担当者が対応いたします。
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded font-semibold transition-all duration-300 hover:shadow-[0_0_32px_rgba(73,169,66,0.4)]"
                        style={{ backgroundColor: '#49a942', color: '#fff' }}
                    >
                        お問い合わせフォームへ
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};
