import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wrench, Package, RefreshCw, Factory, Globe, ShieldCheck, FileText } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useCountUp } from '@/hooks/useCountUp';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import { TOPIC_LABELS } from '@/constants/topics';
import { getYearsInBusiness } from '@/constants/company';
import { formatDate } from '@/utils/formatDate';
import type { Article } from '@/types/article';
import dtrToolsDark from "@/assets/dtr_tools_dark.jpg";

export function Home() {
  useDocumentTitle('');
  const years = getYearsInBusiness();
  const { ref: countUpRef, displayValue: yearsValue } = useCountUp<HTMLDivElement>({ end: years, suffix: '+' });
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data?.articles) setArticles(data.articles.slice(0, 3));
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-foreground text-background overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dtrToolsDark}
            alt=""
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-background/20 rounded-full mb-10">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-background/60 uppercase">株式会社清水商會 — Est. 1950</span>
            </div>

            {/* Main Copy */}
            <p className="font-mono text-xs tracking-[0.2em] text-background/40 uppercase mb-4">— 歯車屋の意地</p>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15] mb-6 text-background/90">
              The Resolve<br />
              that Turns<br />
              <span className="text-gradient-logo italic">the World.</span>
            </h1>

            <div className="w-12 h-px bg-primary mb-8" />

            <p className="text-base md:text-lg font-light text-background/60 max-w-lg leading-loose mb-12">
              新品・中古機械の選定から、工具の提案、<br className="hidden md:inline" />
              修理、加工代行まで。<br />
              {years}年の知見で、歯車づくりの「困った」に応え続ける。
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/services"
                className="group px-8 py-4 bg-primary text-primary-foreground font-medium text-sm tracking-wider rounded-md uppercase transition-all duration-500 flex items-center gap-3"
              >
                事業内容を見る <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                to="/matrix"
                className="border border-background/20 px-8 py-4 text-background/70 font-medium text-sm tracking-wider rounded-md uppercase transition-all duration-500 hover:border-matrix-green hover:text-matrix-green"
              >
                Matrix ブランド
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden xl:flex gap-10">
          {[
            { label: "Precision", value: "Sub-micron" },
            { label: "Experience", value: `${years}+ Years` },
            { label: "Location", value: "Ota, Tokyo" },
          ].map((stat, i) => (
            <div key={i} className="text-right border-r border-background/10 pr-6 last:border-0 last:pr-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-background/30 mb-1">{stat.label}</p>
              <p className="text-base font-medium font-serif text-background/60">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 relative">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                icon: Package,
                title: "切削・研削工具",
                desc: "ホブカッター・ギアカッター・砥石など歯車加工の工具全般。",
                link: "/services#service-01"
              },
              {
                icon: Cpu,
                title: "工作機械",
                desc: "歯車加工機械・研削盤・ホブ盤など、新品機械の提案・納入。",
                link: "/services#service-02"
              },
              {
                icon: Wrench,
                title: "修理・メンテナンス",
                desc: "古い機械も確かな技術で現役へ。オーバーホールも対応。",
                link: "/services#service-03"
              },
              {
                icon: RefreshCw,
                title: "中古機械の売買",
                desc: "プロの目利きで点検・整備した中古機械の買取・販売。",
                link: "/services#service-04"
              },
              {
                icon: Factory,
                title: "加工代行",
                desc: "協力企業のネットワークを活用した高精度加工の代行。",
                link: "/services#service-05"
              },
              {
                icon: Globe,
                title: "輸入・調達",
                desc: "MATRIX社をはじめ、海外メーカーからの直接輸入。",
                link: "/services#service-06"
              }
            ].map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="bg-card border border-border p-6 rounded-xl group transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{feature.desc}</p>
                <div className="flex items-center gap-1.5 text-primary font-medium text-xs tracking-wider">
                  詳しく見る <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div></ScrollRevealSection>
      </section>

      {/* Latest Articles */}
      {articles.length > 0 && (
        <section className="py-24 bg-secondary">
          <ScrollRevealSection><div className="container mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Latest Articles</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium">最新のニュース & コラム</h2>
              </div>
              <Link
                to="/tech?tab=docs"
                className="hidden md:inline-flex items-center gap-2 text-sm text-primary font-medium tracking-wider hover:gap-4 transition-all"
              >
                すべて見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {articles.map(article => (
                <Link
                  key={article.id}
                  to={`/tech/articles/${article.id}`}
                  className="bg-card border border-border p-6 rounded-xl group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {article.category && (
                      <span className="px-2.5 py-0.5 bg-primary text-primary-foreground text-xs tracking-wider rounded">
                        {article.category}
                      </span>
                    )}
                    {article.publishedAt && (
                      <span className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-medium leading-relaxed mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  {article.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {article.topics.slice(0, 2).map(topic => (
                        <span key={topic} className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded">
                          {TOPIC_LABELS[topic] ?? topic}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/tech?tab=docs"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium tracking-wider"
              >
                すべて見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div></ScrollRevealSection>
        </section>
      )}

      {/* Trust & Heritage Section */}
      <section className="py-24">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight">
                世界に誇る「大田区」の<br />
                <span className="text-primary">技術と感性を、次世代へ。</span>
              </h2>
              <p className="text-sm text-foreground/60 leading-relaxed mb-8">
                私たちは、ただの商社ではありません。現場の職人と共に歩み、
                機械の「深奥」を知るからこそできる提案があります。
                その誇りと責任を胸に、日本のものづくりを支え続けます。
              </p>
              <Link to="/company" className="inline-flex items-center gap-3 text-primary font-medium tracking-wider text-sm hover:gap-5 transition-all">
                会社情報を見る <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="bg-card border border-border p-6 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <div ref={countUpRef} className="text-3xl font-medium mb-1">{yearsValue}</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase">年の信頼</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-medium mb-1">GLOBAL</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase">グローバルネットワーク</div>
              </div>
            </div>
          </div>
        </div></ScrollRevealSection>
      </section>
    </div>
  );
}
