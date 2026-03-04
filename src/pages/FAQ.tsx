import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
    return (
        <div className="min-h-screen bg-background bg-grid-white">
            {/* Page Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
                            COMMON <br />
                            <span className="text-gradient-blue uppercase">Questions</span>
                        </h1>
                        <p className="text-xl text-white/70 leading-relaxed">
                            サービス内容や製品に関する、よくあるご質問をまとめています。<br />
                            解決しない場合は、お気軽にお問い合わせください。
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Accordion type="single" collapsible className="w-full space-y-6 animate-fade-in">
                        <AccordionItem value="item-1" className="glass-panel px-8 rounded-3xl border-white/5 transition-all duration-300 data-[state=open]:border-blue-500/30 data-[state=open]:bg-white/[0.08]">
                            <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                <span className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                        <HelpCircle size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white/90">中古機械の買取・販売は行っていますか？</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/50 leading-relaxed pb-8 text-md border-t border-white/5 pt-6">
                                はい。株式会社清水商會では、中古の歯車工作機械や研削盤の買取・整備・販売を行っております。
                                75年の歴史で培った確かな目利きで、眠っている価値を蘇らせ、次のお客様へと繋ぎます。
                                最新の在庫状況については、お問い合わせフォームよりお気軽にご連絡ください。
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="glass-panel px-8 rounded-3xl border-white/5 transition-all duration-300 data-[state=open]:border-blue-500/30 data-[state=open]:bg-white/[0.08]">
                            <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                <span className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                        <HelpCircle size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white/90">MATRIXブランドの新品研削盤の取り扱いはありますか？</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/50 leading-relaxed pb-8 text-md border-t border-white/5 pt-6">
                                提携パートナーを通じて、MATRIXブランドの新品研削盤の導入支援・アフターサービスを承っております。
                                英国が誇る超精密研削盤の最新ラインナップから、お客様の加工ニーズに最適な仕様をご提案いたします。
                                詳細なカタログや、加工テスト（テストピースの加工）のご相談も随時受け付けております。
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="glass-panel px-8 rounded-3xl border-white/5 transition-all duration-300 data-[state=open]:border-blue-500/30 data-[state=open]:bg-white/[0.08]">
                            <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                <span className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                        <HelpCircle size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white/90">レトロフィット（旧型機械の更新）は可能ですか？</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/50 leading-relaxed pb-8 text-md border-t border-white/5 pt-6">
                                可能です。NC装置の載せ替えや、機械的なオーバーホールを含めたレトロフィットのご提案を得意としております。
                                長年使い慣れた機械の剛性を活かしつつ、最新の操作性と精度を付与することで、最小限の投資で最大限の生産性向上を実現します。
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="glass-panel px-8 rounded-3xl border-white/5 transition-all duration-300 data-[state=open]:border-blue-500/30 data-[state=open]:bg-white/[0.08]">
                            <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                <span className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                        <HelpCircle size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white/90">計算ツールは無料で使えますか？</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/50 leading-relaxed pb-8 text-md border-t border-white/5 pt-6">
                                当ウェブサイトで公開している各種計算ツールは、業界の皆様の利便性向上のために完全無料で公開しております。
                                スマートフォンからも快適にご利用いただけるレスポンシブデザインを採用しています。
                                現場での瞬間的な判断や、設定数値の確認にぜひお役立てください。
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="glass-panel px-8 rounded-3xl border-white/5 transition-all duration-300 data-[state=open]:border-blue-500/30 data-[state=open]:bg-white/[0.08]">
                            <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                <span className="flex items-center gap-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white transition-all">
                                        <HelpCircle size={20} />
                                    </div>
                                    <span className="text-lg font-bold text-white/90">修理やメンテナンスの対応エリアは？</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-white/50 leading-relaxed pb-8 text-md border-t border-white/5 pt-6">
                                原則として日本全国対応しております。
                                また、海外工場への出張メンテナンスや、遠隔での技術サポートについても実績がございます。
                                工作機械の「動かない」「精度が出ない」といったトラブルは、場所を問わずまずはご相談ください。
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
};

