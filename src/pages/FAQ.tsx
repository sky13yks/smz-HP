import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "どのような機械を取り扱っていますか？",
        answer: "歯車加工機械（ホブ盤、歯車研削盤、歯車測定機など）を中心に、各種工作機械・切削工具・周辺機器を取り扱っています。国内外のメーカーから特定ブランドに偏らず、お客様の加工条件に最適な設備をご提案いたします。",
    },
    {
        question: "MATRIX（マトリックス）の歯車研削盤とは？",
        answer: "MATRIX Precision Machines は1913年に英国コヴェントリーで創業した歯車研削盤の専門メーカーです。現在は台湾に生産拠点を置き、成形研削盤・創成研削盤・ウォーム研削盤・ベベルギア研削盤など幅広いラインナップを展開しています。FANUC / SIEMENS制御でサブミクロン精度の研削が可能です。清水商會は日本国内の代理店として、導入相談・据付・アフターサービスまで一貫して対応いたします。",
    },
    {
        question: "中古機械の買取・販売は行っていますか？",
        answer: "はい。中古の歯車工作機械や研削盤の買取・整備・販売を行っております。75年の経験で培った目利きにより、適正な査定と丁寧な整備を実施し、次のお客様へお届けしています。2013年にはツルミマシンセンターを開設し、中古機械の展示・整備体制を強化しました。売りたい・買いたい、どちらもお気軽にご相談ください。",
    },
    {
        question: "修理やメンテナンスの対応エリアは？",
        answer: "日本全国対応しております。海外工場への出張メンテナンスや、遠隔での技術サポートの実績もございます。「動かない」「精度が出ない」「異音がする」といった工作機械のトラブルは、場所を問わずまずはご連絡ください。",
    },
    {
        question: "レトロフィット（旧型機械の制御更新）は可能ですか？",
        answer: "可能です。NC装置の載せ替えや機械的なオーバーホールを含めたレトロフィットを得意としております。長年使い慣れた機械の剛性を活かしつつ、最新の操作性と精度を付与することで、新品を購入するよりも低コストで生産性を向上させることができます。",
    },
    {
        question: "加工の代行はお願いできますか？",
        answer: "はい。協力企業のネットワークと設備を活用し、各種部品の加工代行を承っています。「納期が迫っているが設備が空いていない」「社内に対応設備がない」といった場合にご利用いただいております。試作の少量加工から量産まで対応可能ですので、まずは図面をお送りください。",
    },
    {
        question: "海外メーカーの機械を直接購入できますか？",
        answer: "清水商會では海外メーカー（特に台湾・欧州）からの工作機械の直接輸入・調達を行っております。国内では入手困難な歯車加工用の専門機械も、海外ネットワークを活用して調達可能です。輸入に伴う通関手続き・据付・技術サポートまで一貫対応いたします。",
    },
    {
        question: "計算ツールは無料で使えますか？",
        answer: "当ウェブサイトで公開しているホブ刃溝研削の向心度補正計算などの技術ツールは、業界の皆様の利便性向上のために完全無料で公開しております。スマートフォンからもご利用いただけます。現場での設定値確認にお役立てください。",
    },
    {
        question: "見積りの依頼方法と納期は？",
        answer: "お問い合わせフォーム・メール・お電話のいずれでも承ります。内容を確認のうえ、担当者より迅速にご回答いたします。図面や仕様書がある場合はメール添付（PDF, DXF, STP等）いただくと、より正確なお見積りが可能です。",
    },
];

export const FAQ: React.FC = () => {
    useDocumentTitle('よくあるご質問');
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-none">
                            よくあるご質問
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            サービス内容や製品に関する、よくあるご質問をまとめています。<br />
                            解決しない場合は、お気軽にお問い合わせください。
                        </p>
                    </div>
                </div>
            </section>

            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Accordion type="single" collapsible className="w-full space-y-6 animate-fade-in">
                        {faqItems.map((item, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="bg-card border border-border px-8 rounded-xl transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-card"
                            >
                                <AccordionTrigger className="text-left py-8 hover:no-underline group">
                                    <span className="flex items-center gap-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all flex-shrink-0">
                                            <HelpCircle size={20} />
                                        </div>
                                        <span className="text-lg font-medium text-foreground/90">{item.question}</span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-md border-t border-border pt-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
};
