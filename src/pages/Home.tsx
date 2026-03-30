import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wrench, Package, ShieldCheck, Globe } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import dtrToolsDark from "@/assets/dtr_tools_dark.jpg";

export function Home() {
  useDocumentTitle('');
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

            <p className="text-base md:text-lg font-light text-background/60 max-w-lg leading-relaxed mb-12">
              工具の選定から、機械の修理、加工の代行まで。<br />
              75年の知見で、歯車づくりの「困った」に応え続ける。
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
            { label: "Experience", value: "75+ Years" },
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
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "工作機械・周辺機器",
                desc: "国内外の最先端機から、生産性を最大化する周辺機器までをご提案。",
                link: "/services"
              },
              {
                icon: Wrench,
                title: "修理・メンテナンス",
                desc: "数十年愛用された機械も、最先端の精度で蘇らせる職人技と知識。",
                link: "/services"
              },
              {
                icon: Package,
                title: "加工代行・受託",
                desc: "商社の枠を超え、自社ネットワークを駆使した高精度加工の代行。",
                link: "/services"
              }
            ].map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="bg-card border border-border p-8 rounded-xl group transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{feature.desc}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-xs tracking-wider uppercase">
                  詳しく見る <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Heritage Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
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
                <div className="text-3xl font-medium mb-1">75+</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase">年の信頼</div>
              </div>
              <div className="bg-card border border-border p-6 rounded-xl">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <div className="text-3xl font-medium mb-1">GLOBAL</div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.15em] uppercase">グローバルネットワーク</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
