import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wrench, Package, ShieldCheck, Globe } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import dtrToolsDark from "@/assets/dtr_tools_dark.jpg";

export function Home() {
  useDocumentTitle('');
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={dtrToolsDark}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card/80 backdrop-blur border border-border rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">The Gear Partner Since 1950</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tighter leading-[0.9] mb-10">
              歯車に、<br />
              <span className="text-primary">最適解を。</span>
            </h1>

            <p className="text-xl md:text-2xl font-sans font-light text-foreground/70 max-w-2xl leading-relaxed mb-12">
              工具の選定から、機械の修理、加工の代行まで。
              清水商會は75年の知見で、歯車づくりの「困った」に応え続ける技術商社です。
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                to="/services"
                className="group px-10 py-5 bg-primary text-primary-foreground font-medium text-sm tracking-wider rounded-md uppercase transition-all duration-500 flex items-center gap-3"
              >
                事業内容を見る <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                to="/matrix"
                className="bg-card/80 backdrop-blur border border-border px-10 py-5 font-medium text-sm tracking-wider rounded-md uppercase transition-all duration-500 hover:border-matrix-green/50 hover:text-matrix-green"
              >
                Matrix ブランド
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden xl:flex gap-12">
          {[
            { label: "Precision", value: "Sub-micron" },
            { label: "Experience", value: "75+ Years" },
            { label: "Location", value: "Ota, Tokyo" },
          ].map((stat, i) => (
            <div key={i} className="text-right border-r border-border pr-6 last:border-0 last:pr-0">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-xl font-medium font-serif">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-32 relative">
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
                className="bg-card border border-border p-10 rounded-xl group transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.desc}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-xs tracking-wider uppercase">
                  詳しく見る <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Heritage Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
                世界に誇る「大田区」の<br />
                <span className="text-primary font-medium">技術と感性を、次世代へ。</span>
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-10">
                私たちは、ただの商社ではありません。現場の職人と共に歩み、
                機械の「深奥」を知るからこそできる提案があります。
                その誇りと責任を胸に、日本のものづくりを支え続けます。
              </p>
              <Link to="/company" className="inline-flex items-center gap-4 text-primary font-medium tracking-wider text-sm hover:gap-6 transition-all">
                会社情報を見る <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="bg-card border border-border p-8 rounded-xl">
                <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                <div className="text-4xl font-medium mb-2">75+</div>
                <div className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase">年の信頼</div>
              </div>
              <div className="bg-card border border-border p-8 rounded-xl">
                <Globe className="w-10 h-10 text-primary mb-6" />
                <div className="text-4xl font-medium mb-2">GLOBAL</div>
                <div className="font-mono text-xs text-muted-foreground tracking-[0.15em] uppercase">グローバルネットワーク</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
