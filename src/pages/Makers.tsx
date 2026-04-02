import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import { makerCategories, type Maker } from '@/constants/makers';

function MakerCard({ maker }: { maker: Maker }) {
  const content = (
    <div className="flex-shrink-0 w-64 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 mx-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium text-foreground truncate">{maker.name}</p>
        {maker.url && <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 ml-2" />}
      </div>
      {maker.description && (
        <p className="text-xs text-muted-foreground truncate">{maker.description}</p>
      )}
    </div>
  );

  if (maker.url) {
    return (
      <a href={maker.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
        {content}
      </a>
    );
  }

  return <div className="flex-shrink-0">{content}</div>;
}

function MarqueeBanner({ makers, speed = 30 }: { makers: Maker[]; speed?: number }) {
  // リストを2回繰り返して無限ループに見せる
  const doubled = [...makers, ...makers];

  return (
    <div className="relative overflow-hidden py-4 group">
      {/* 左右のフェード */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((maker, i) => (
          <MakerCard key={`${maker.name}-${i}`} maker={maker} />
        ))}
      </div>
    </div>
  );
}

function MarqueeBannerReverse({ makers, speed = 35 }: { makers: Maker[]; speed?: number }) {
  const doubled = [...makers, ...makers];

  return (
    <div className="relative overflow-hidden py-4 group">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

      <div
        className="flex animate-marquee direction-reverse group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s`, animationDirection: 'reverse' }}
      >
        {doubled.map((maker, i) => (
          <MakerCard key={`${maker.name}-${i}`} maker={maker} />
        ))}
      </div>
    </div>
  );
}

export function Makers() {
  useDocumentTitle('取扱メーカー');

  const toolMakers = makerCategories.find(c => c.id === 'tools')!;
  const machineMakers = makerCategories.find(c => c.id === 'machines')!;

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-none">
              取扱メーカー
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              清水商會が取り扱う主要メーカーをご紹介します。<br />
              各カードをクリックするとメーカー公式サイトへ移動します。
            </p>
          </div>
        </div>
      </section>

      {/* Tool Makers Banner */}
      <section className="py-12">
        <ScrollRevealSection>
          <div className="container mx-auto px-6 mb-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full">
                {toolMakers.subtitle}
              </span>
              <h2 className="text-xl font-medium">{toolMakers.title}</h2>
            </div>
          </div>
          <MarqueeBanner makers={toolMakers.makers} speed={25} />
        </ScrollRevealSection>
      </section>

      {/* Machine Makers Banner */}
      <section className="py-12 bg-secondary">
        <ScrollRevealSection>
          <div className="container mx-auto px-6 mb-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full">
                {machineMakers.subtitle}
              </span>
              <h2 className="text-xl font-medium">{machineMakers.title}</h2>
            </div>
          </div>
          <MarqueeBannerReverse makers={machineMakers.makers} speed={35} />
        </ScrollRevealSection>
      </section>

      {/* Note + CTA */}
      <section className="py-20">
        <ScrollRevealSection>
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="bg-secondary border border-border rounded-xl p-10">
              <h3 className="text-xl font-medium mb-4">上記以外のメーカーも対応可能です</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                清水商會は特定メーカーに縛られない中立的な立場で、<br className="hidden md:inline" />
                お客様の加工条件に最適な機械・工具をご提案いたします。<br className="hidden md:inline" />
                掲載のないメーカーについてもお気軽にお問い合わせください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-md font-medium tracking-wider text-sm transition-all duration-500"
              >
                お問い合わせする <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollRevealSection>
      </section>
    </div>
  );
}
