import { useState, useEffect } from "react";
import { ArrowRight, Cpu, Package, Wrench, RefreshCw, Factory, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import dtrToolsDark from "@/assets/dtr_tools_dark.jpg";
import dtrToolsWhite from "@/assets/dtr_tools_white.jpg";
import fabrisHr254 from "@/assets/fabris_hr254.jpeg";
import fabrisHr355 from "@/assets/fabris_hr355.jpeg";
import seiwaHb403_1 from "@/assets/seiwa_hb403_1.jpg";
import seiwaHb403_2 from "@/assets/seiwa_hb403_2.jpg";

const machineImages = [
  { src: fabrisHr254, alt: "FABRIS HR254 CNCホブ盤" },
  { src: fabrisHr355, alt: "FABRIS HR355 CNCホブ盤" },
  { src: seiwaHb403_1, alt: "SEIWA Orbis HB403 歯車加工機" },
  { src: seiwaHb403_2, alt: "SEIWA Orbis HB403 歯車加工機（別角度）" },
];

const toolImages = [
  { src: dtrToolsDark, alt: "DTR製 歯車加工工具コレクション" },
  { src: dtrToolsWhite, alt: "DTR製 歯車加工工具ラインナップ" },
];

function ImageCarousel({ images, label }: { images: { src: string; alt: string }[]; label: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden bg-secondary flex items-center justify-center" role="region" aria-label={label} aria-live="polite">
      <div className="relative w-full">
        {images.map((img, i) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            aria-hidden={i !== current}
            className={`w-full h-auto object-contain transition-opacity duration-1000 ${
              i === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setCurrent(i)}
              aria-label={`スライド ${i + 1}: ${img.alt}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-4' : 'bg-foreground/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const services = [
  {
    icon: Package,
    number: "01",
    title: "切削・研削工具の「提案・納入」",
    subtitle: "刃物ひとつで、精度が変わる",
    description:
      "ホブカッター、ピニオンカッター、ブローチなどの切削工具に加え、砥石・ドレッサーなどの研削工具、さらに特殊工具や治具の製作にも対応しています。加工条件や材質に合わせた最適な工具選定を、専門知識でサポートします。",
    makers: "アヅミ / 伊澤技術研究所 / 小笠原プレシジョンラボラトリー / 大和精密工具 / DTR / ナチ不二越 / 新潟精密 ほか",
    items: ["ホブカッター", "ピニオンカッター", "ブローチ", "シェービングカッター", "砥石・ドレッサー", "特殊工具・治具製作"],
    itemLabel: "取扱商品",
    carouselType: 'tool' as const,
  },
  {
    icon: Cpu,
    number: "02",
    title: "工作機械の「提案・納入」",
    subtitle: "現場の相性を知る目利きが選ぶ",
    description:
      "歯車加工機械を中心に、研削盤・ホブ盤・測定機など国内外の新品工作機械をご提案します。カタログスペックだけでは判断できない「現場との相性」を、75年の経験で見極めます。",
    makers: "DMG森精機株式会社 / FANUC株式会社 / MATRIX / オークマ株式会社 / 株式会社岡本工作機械製作所 / カシフジ株式会社 / 唐津プレシジョン株式会社 / 清和ジーテック株式会社 / 株式会社東京精密 / 東京テクニカル株式会社 / 株式会社不二越 / 浜井産業株式会社 / ヤマザキマザック株式会社 ほか",
    items: ["歯車加工機械（新品）", "研削盤", "ホブ盤", "測定機", "周辺機器"],
    itemLabel: "取扱商品",
    carouselType: 'machine' as const,
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
  },
  {
    icon: Globe,
    number: "06",
    title: "海外からの「輸入・調達」",
    subtitle: "国内で手に入らないものも、世界から",
    description:
      "国内では調達が難しくなってきた歯車用工作機械を中心に、海外の優れたメーカーから直接輸入・お届けしています。特に台湾のトップメーカー「MATRIX（マトリックス）」社とは強固なネットワークを構築。75年の経験で培った「確かな目」で選び抜いた、世界基準の技術を日本の現場へお届けします。",
    items: ["MATRIX社製 歯車用工作機械の輸入・販売・技術サポート"],
    itemLabel: "取扱内容",
    isMatrix: true,
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
              清水商會が、現場の「困った」を解決する5つのカタチ。
              75年の知見を次世代のソリューションへと昇華させました。
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  id={`service-${service.number}`}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:-translate-y-1 scroll-mt-24"
                >
                  <div className={`flex flex-col ${service.carouselType ? 'md:flex-row' : ''}`}>
                    {service.carouselType && (
                      <div className="md:w-2/5 flex-shrink-0">
                        <ImageCarousel
                          images={service.carouselType === 'machine' ? machineImages : toolImages}
                          label={service.carouselType === 'machine' ? '取扱工作機械' : '取扱工具'}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12">
                      {/* Number badge (inline) */}
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
                          <p className="text-xs text-muted-foreground mt-2 italic">上記以外のメーカーも対応可能です。お気軽にご相談ください。</p>
                        </div>
                      )}

                      {/* Items Tags */}
                      <div className="flex flex-wrap gap-3 items-center">
                        {service.items.map((item, j) => (
                          <span
                            key={j}
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
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
        </div>
      </section>
    </div>
  );
}
