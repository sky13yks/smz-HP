import { ArrowRight, Cpu, Package, Wrench, RefreshCw, Factory, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import { LazyCarousel } from '@/components/LazyCarousel';
import { formatMakerNames } from '@/constants/makers';
import dtrToolsDark from "@/assets/dtr_tools_dark.jpg";
import dtrToolsWhite from "@/assets/dtr_tools_white.jpg";
import fabrisHr254 from "@/assets/fabris_hr254.jpeg";
import fabrisHr355 from "@/assets/fabris_hr355.jpeg";
import seiwaHb403_1 from "@/assets/seiwa_hb403_1.jpg";
import seiwaHb403_2 from "@/assets/seiwa_hb403_2.jpg";

const services = [
  {
    icon: Package,
    number: "01",
    title: "切削・研削工具の「提案・納入」",
    subtitle: "刃物ひとつで、精度が変わる",
    description:
      "ホブカッター、ピニオンカッター、ブローチなどの切削工具に加え、砥石・ドレッサーなどの研削工具、さらに特殊工具や治具の製作にも対応しています。加工条件や材質に合わせた最適な工具選定を、専門知識でサポートします。",
    makers: formatMakerNames('tools'),
    items: ["ホブカッター", "ピニオンカッター", "ブローチ", "シェービングカッター", "砥石・ドレッサー", "特殊工具・治具製作"],
    itemLabel: "取扱商品",
    images: [
      { src: dtrToolsDark, alt: "DTR製 歯車加工工具コレクション" },
      { src: dtrToolsWhite, alt: "DTR製 歯車加工工具ラインナップ" },
    ],
  },
  {
    icon: Cpu,
    number: "02",
    title: "工作機械の「提案・納入」",
    subtitle: "現場の相性を知る目利きが選ぶ",
    description:
      "歯車加工機械を中心に、研削盤・ホブ盤・測定機など国内外の新品工作機械をご提案します。カタログスペックだけでは判断できない「現場との相性」を、創業以来の経験で見極めます。",
    makers: formatMakerNames('machines'),
    items: ["歯車加工機械（新品）", "研削盤", "ホブ盤", "測定機", "周辺機器"],
    itemLabel: "取扱商品",
    images: [
      { src: fabrisHr254, alt: "FABRIS HR254 CNCホブ盤" },
      { src: fabrisHr355, alt: "FABRIS HR355 CNCホブ盤" },
      { src: seiwaHb403_1, alt: "SEIWA Orbis HB403 歯車加工機" },
      { src: seiwaHb403_2, alt: "SEIWA Orbis HB403 歯車加工機（別角度）" },
    ],
  },
  {
    icon: Wrench,
    number: "03",
    title: "機械を蘇らせる「修理・メンテナンス」",
    subtitle: "古い機械も、確かな技術で現役へ",
    description:
      "「調子が悪いけれど、だましだまし使っている」「メーカーサポートが終わってしまった」そんな機械もお任せください。古き良き機械は次の世代へ遺したい。そんな温故知新の精神で、長年培った修理技術を駆使し、お客様の大切な資産を守ります。",
    items: ["工作機械の修理", "オーバーホール", "定期メンテナンス"],
    itemLabel: "サービス内容",
    images: [
      { src: "https://images.unsplash.com/photo-1581092160607-ee67df60e2a4?w=800&fit=crop&q=75", alt: "工作機械のメンテナンス作業" },
      { src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&fit=crop&q=75", alt: "工場での機械修理" },
    ],
  },
  {
    icon: RefreshCw,
    number: "04",
    title: "賢くつなぐ「中古機械の売買・再生」",
    subtitle: "良いものを、次の現場へ",
    description:
      "「新機を導入したいがコストを抑えたい」「使わなくなった機械を有効活用したい」という声に応えます。ただの中古販売ではなく、プロの目でしっかり点検・整備した「動く財産」を橋渡しします。",
    items: ["中古工作機械の買取・販売", "リユース提案"],
    itemLabel: "サービス内容",
    images: [
      { src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&fit=crop&q=75", alt: "工場フロアの機械設備" },
      { src: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=800&fit=crop&q=75", alt: "産業機械の展示" },
    ],
  },
  {
    icon: Factory,
    number: "05",
    title: "現場を助ける「機械加工の代行業務」",
    subtitle: "「人手が足りない」時のパートナー",
    description:
      "「納期が迫っているが設備が空いていない」「一時的に人手が足りない」といった際、弊社協力企業の設備と技術で加工をバックアップします。商社の枠を超え、実務を通してお客様の生産ラインを支えます。",
    items: ["各種部品加工", "試作代行", "生産工程のサポート"],
    itemLabel: "サービス内容",
    images: [
      { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&fit=crop&q=75", alt: "CNC旋盤での金属加工" },
      { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&fit=crop&q=75", alt: "精密部品の切削加工" },
    ],
  },
  {
    icon: Globe,
    number: "06",
    title: "海外からの「輸入・調達」",
    subtitle: "国内で手に入らないものも、世界から",
    description:
      "国内では調達が難しくなってきた歯車用工作機械を中心に、海外の優れたメーカーから直接輸入・お届けしています。特に台湾のトップメーカー「MATRIX（マトリックス）」社とは強固なネットワークを構築。長年の経験で培った「確かな目」で選び抜いた、世界基準の技術を日本の現場へお届けします。",
    items: ["MATRIX社製 歯車用工作機械の輸入・販売・技術サポート"],
    itemLabel: "取扱内容",
    isMatrix: true,
    images: [
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&fit=crop&q=75", alt: "国際貿易・コンテナ港" },
      { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&fit=crop&q=75", alt: "グローバル物流" },
    ],
  },
];

export function Services() {
  useDocumentTitle('事業内容');
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8">
              事業内容
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              清水商會が、現場の「困った」を解決する6つのカタチ。
              創業以来の知見を次世代のソリューションへと昇華させました。
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-32">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service) => {
              const Icon = service.icon;
              const hasImages = service.images.length > 0;
              return (
                <div
                  key={service.number}
                  id={`service-${service.number}`}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:-translate-y-1 scroll-mt-24"
                >
                  <div className={`flex flex-col ${hasImages ? 'md:flex-row' : ''}`}>
                    {hasImages && (
                      <div className="md:w-2/5 flex-shrink-0">
                        <LazyCarousel
                          images={service.images}
                          label={service.title}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12">
                      {/* Number badge */}
                      <div
                        className={`inline-block px-5 py-1.5 rounded-full font-mono text-xs font-medium tracking-[0.15em] text-primary-foreground mb-6 ${service.isMatrix ? "bg-matrix-green" : "bg-primary"
                          }`}
                      >
                        SERVICE {service.number}
                      </div>
                      <div className="flex items-start gap-6 mb-6">
                        <div
                          className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 ${service.isMatrix ? "bg-matrix-green/10 text-matrix-green" : "bg-primary/10 text-primary"
                            }`}
                        >
                          <Icon size={28} />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-medium mb-2">
                            {service.title}
                          </h2>
                          <p className={`text-sm font-medium tracking-wider ${service.isMatrix ? "text-matrix-green" : "text-primary"
                            }`}>
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-foreground/60 leading-relaxed mb-6 text-lg">
                        {service.description}
                      </p>

                      {/* Makers */}
                      {service.makers && (
                        <div className="mb-6 p-4 bg-secondary rounded-lg border border-border">
                          <p className="text-xs text-muted-foreground mb-1.5 font-medium">主な取扱メーカー（順不同）</p>
                          <p className="text-xs text-foreground/70 leading-relaxed">{service.makers}</p>
                          <p className="text-xs text-muted-foreground mt-2 italic">上記以外のメーカーも対応可能です。<Link to="/makers" className="text-primary underline underline-offset-2 not-italic">メーカー一覧を見る →</Link></p>
                        </div>
                      )}

                      {/* Items Tags */}
                      <div className="flex flex-wrap gap-3 items-center">
                        {service.items.map((item) => (
                          <span
                            key={item}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-secondary text-foreground/70 transition-colors group-hover:border-foreground/10 group-hover:text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* MATRIX link */}
                      {service.isMatrix && (
                        <Link
                          to="/matrix"
                          className="inline-flex items-center gap-3 mt-8 text-sm font-medium tracking-wider text-matrix-green uppercase border-b border-matrix-green/20 pb-1 hover:border-matrix-green transition-all"
                        >
                          技術詳細を見る <ArrowRight size={16} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div></ScrollRevealSection>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <ScrollRevealSection><div className="container mx-auto px-6 text-center">
          <div className="bg-card border border-border max-w-4xl mx-auto p-16 rounded-xl relative overflow-hidden">
            <h2 className="text-4xl font-medium mb-8">お気軽にご相談ください</h2>
            <p className="text-foreground/60 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
              「ちょっと清水さんに聞いてみよう」<br />
              気兼ねなく声をかけていただける、製造現場の親身なパートナーでありたい。<br />
              道具一つ、部品一つのご相談から承ります。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-md font-medium tracking-wider text-sm uppercase transition-all duration-500"
            >
              お問い合わせする <ArrowRight size={18} />
            </Link>
          </div>
        </div></ScrollRevealSection>
      </section>
    </div>
  );
}
