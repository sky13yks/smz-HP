import { Link } from "react-router-dom";
import { GearAnimation } from "../components/GearAnimation";
import { ArrowRight, Cpu, Wrench, Package, ShieldCheck, Globe } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Home() {
  useDocumentTitle('');
  return (
    <div className="min-h-screen bg-background scanline overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />

        {/* Massive Background Gears */}
        <div className="absolute -right-48 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block select-none scale-150">
          <GearAnimation size={1200} speed={0.4} theme="sketch" reverse />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">Precision Engineering Since 1947</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
              MASTERING <br />
              <span className="text-gradient-blue">THE MICRON.</span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/70 max-w-2xl leading-relaxed mb-12">
              東京都大田区から世界へ。清水商會は、工作機械・切削工具・加工代行を融合させた
              次世代の「技術商社」として、ものづくりの未来を削り出します。
            </p>

            <div className="flex flex-wrap gap-6">
              <Link
                to="/services"
                className="group px-10 py-5 bg-blue-600 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 flex items-center gap-3"
              >
                Our Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
              <Link
                to="/matrix"
                className="glass-panel px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:border-matrix-green/50 hover:text-matrix-green"
              >
                The Matrix Brand
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
            <div key={i} className="text-right border-r border-white/10 pr-6 last:border-0 last:pr-0">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">{stat.label}</p>
              <p className="text-xl font-bold font-mono">{stat.value}</p>
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
                className="glass-panel p-10 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed mb-6">{feature.desc}</p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs tracking-widest uppercase">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Heritage Section */}
      <section className="py-32 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                世界に誇る「大田区」の<br />
                <span className="text-gradient-blue font-black">技術と感性を、次世代へ。</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-10">
                私たちは、ただの商社ではありません。現場の職人と共に歩み、
                機械の「深奥」を知るからこそできる提案があります。
                その誇りと責任を胸に、日本のものづくりを支え続けます。
              </p>
              <Link to="/company" className="inline-flex items-center gap-4 text-blue-400 font-bold tracking-widest text-sm hover:gap-6 transition-all">
                VIEW OUR HERITAGE <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="glass-panel p-8 rounded-2xl">
                <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
                <div className="text-4xl font-black mb-2">75+</div>
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Years of Trust</div>
              </div>
              <div className="glass-panel p-8 rounded-2xl">
                <Globe className="w-10 h-10 text-blue-400 mb-6" />
                <div className="text-4xl font-black mb-2">GLOBAL</div>
                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Supplier Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}