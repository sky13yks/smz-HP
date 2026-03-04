import { ArrowRight, Package, Wrench, RefreshCw, Factory, Globe } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Package,
    number: "01",
    title: "専門商社としての「提案・納入」",
    subtitle: "75年の目利きで、最適な一台を",
    description:
      "創業以来の強みである「歯車用工具」の専門知識をベースに、国内外の最新工作機械をご提案します。カタログスペックだけでは分からない、現場の相性に合わせた「間違いのない選定」をお手伝いします。",
    items: ["歯車用工具", "各種工作機械（新品）", "周辺機器"],
    itemLabel: "取扱商品",
  },
  {
    icon: Wrench,
    number: "02",
    title: "機械を蘇らせる「修理・メンテナンス」",
    subtitle: "古い機械も、確かな技術で現役へ",
    description:
      "「調子が悪いけれど、だましだまし使っている」「メーカーサポートが終わってしまった」そんな機械もお任せください。古き良き機械は次の世代へ遺したい。そんな温故知新の精神で、長年培った修理技術を駆使し、お客様の大切な資産を守ります。",
    items: ["工作機械の修理", "オーバーホール", "定期メンテナンス"],
    itemLabel: "サービス内容",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "賢くつなぐ「中古機械の売買・再生」",
    subtitle: "良いものを、次の現場へ",
    description:
      "「新機を導入したいがコストを抑えたい」「使わなくなった機械を有効活用したい」という声に応えます。ただの中古販売ではなく、プロの目でしっかり点検・整備した「動く財産」を橋渡しします。",
    items: ["中古工作機械の買取・販売", "リユース提案"],
    itemLabel: "サービス内容",
  },
  {
    icon: Factory,
    number: "04",
    title: "現場を助ける「機械加工の代行業務」",
    subtitle: "「人手が足りない」時のパートナー",
    description:
      "「納期が迫っているが設備が空いていない」「一時的に人手が足りない」といった際、弊社協力企業の設備と技術で加工をバックアップします。商社の枠を超え、実務を通してお客様の生産ラインを支えます。",
    items: ["各種部品加工", "試作代行", "生産工程のサポート"],
    itemLabel: "サービス内容",
  },
  {
    icon: Globe,
    number: "05",
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
  return (
    <div className="min-h-screen bg-background bg-grid-white">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8">
              OUR <span className="text-gradient-blue uppercase">Services</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
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
                  className="group relative glass-panel rounded-3xl p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                >
                  {/* Number badge */}
                  <div
                    className={`absolute -top-5 left-10 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.3em] text-white shadow-xl ${service.isMatrix ? "bg-matrix-green" : "bg-blue-600"
                      }`}
                  >
                    SERVICE {service.number}
                  </div>

                  <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${service.isMatrix ? "bg-matrix-green/10 text-matrix-green" : "bg-blue-600/10 text-blue-400"
                          }`}
                      >
                        <Icon size={32} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-black mb-3">
                        {service.title}
                      </h2>
                      <p className={`text-sm font-bold tracking-widest mb-6 uppercase ${service.isMatrix ? "text-matrix-green" : "text-blue-400"
                        }`}>
                        {service.subtitle}
                      </p>
                      <p className="text-white/60 leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>

                      {/* Items Tags */}
                      <div className="flex flex-wrap gap-3 items-center">
                        {service.items.map((item, j) => (
                          <span
                            key={j}
                            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold border border-white/5 bg-white/5 text-white/70 transition-colors group-hover:border-white/10 group-hover:text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* MATRIX link */}
                      {service.isMatrix && (
                        <Link
                          to="/matrix"
                          className="inline-flex items-center gap-3 mt-10 text-sm font-black tracking-widest text-matrix-green uppercase border-b-2 border-matrix-green/20 pb-1 hover:border-matrix-green transition-all"
                        >
                          Technology Details <ArrowRight size={16} />
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
          <div className="glass-panel max-w-4xl mx-auto p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-matrix-green to-blue-600 opacity-50" />
            <h2 className="text-4xl font-black mb-8">お気軽にご相談ください</h2>
            <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
              「ちょっと清水さんに聞いてみよう」<br />
              気兼ねなく声をかけていただける、製造現場の親身なパートナーでありたい。<br />
              道具一つ、部品一つのご相談から承ります。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-background px-12 py-5 rounded-full font-black tracking-widest text-sm uppercase transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105"
            >
              Start Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

