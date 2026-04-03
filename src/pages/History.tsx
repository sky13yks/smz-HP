import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { getYearsInBusiness } from '@/constants/company';

interface TimelineItem {
  year: string;
  month?: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1950",
    month: "APR",
    title: "個人企業として創業",
    description: "清水正治が東京都大田区入新井3丁目にて切削工具の販売を開始。ここから清水商會の歴史が始まりました。"
  },
  {
    year: "1953",
    month: "APR",
    title: "アヅミ㈱特約店に指定",
    description: "アヅミ株式会社の特約店指定を受け、専門商社としての基盤を確立。"
  },
  {
    year: "1959",
    month: "APR",
    title: "株式会社として設立",
    description: "組織を改め株式会社として設立。高度経済成長期とともに、歯切工具の専門性を深めていきました。"
  },
  {
    year: "1961",
    month: "JAN",
    title: "不二越歯切工具 特約販売店",
    description: "株式会社不二越の歯切工具特約販売店に指定。国内屈指の技術力を持つメーカーとの連携を強化。"
  },
  {
    year: "1985",
    month: "APR",
    title: "第二世代への継承",
    description: "清水進が代表取締役に就任。バブル経済後の産業構造の変化を見据えた経営を開始。"
  },
  {
    year: "2007",
    month: "APR",
    title: "古物商許可取得・リセール事業",
    description: "東京都公安委員会より古物商許可を取得。中古機械の有効活用という新たな価値提案をスタート。"
  },
  {
    year: "2013",
    month: "JUL",
    title: "ツルミマシンセンター 開設",
    description: "中古機械展示場を開設。実際の機械を見て触れられる環境を整備。"
  },
  {
    year: "2019",
    month: "MAY",
    title: "第三世代への継承・現在",
    description: "清水正太が代表取締役に就任。伝統的な商社機能にデジタルとグローバルな視点を融合させ、現代の製造業に最適化されたソリューションを展開。"
  }
];

function TimelineItemComponent({ item, index }: { item: TimelineItem; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex gap-8 md:gap-16">
        {/* Year marker */}
        <div className="flex-shrink-0 w-24 md:w-40 text-right pt-2">
          <div className="text-3xl md:text-5xl font-serif font-light text-foreground leading-none">{item.year}</div>
          {item.month && <div className="font-mono text-xs tracking-[0.15em] text-primary mt-2 uppercase">{item.month}</div>}
        </div>

        {/* Timeline line */}
        <div className="relative flex-shrink-0">
          <div className={`w-3 h-3 rounded-full relative z-10 transition-all duration-500 ${isVisible ? "bg-primary shadow-sm" : "bg-muted-foreground/20"}`} />
          {index < timelineData.length - 1 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[1px] h-full bg-border" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-20">
          <div className="surface p-8 rounded-xl transition-all duration-500 hover:border-border/80">
            <h3 className="text-xl font-medium mb-4 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function History() {
  useDocumentTitle('沿革');
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-8 leading-none">
              沿革
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              1950年の創業から現在まで。<br />
              切削工具の専門商社として歩んできた、創業以来の研鑽の軌跡。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-32 relative bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-light mb-20 text-center opacity-20 uppercase tracking-[0.15em]">Milestones</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-7xl md:text-9xl font-serif font-light text-foreground/10 mb-4">{getYearsInBusiness()}</div>
                <div className="font-mono text-xs tracking-[0.15em] text-primary mb-2 uppercase">年の研鑽</div>
                <div className="text-muted-foreground text-sm font-normal">創業からの不変の信頼</div>
              </div>

              <div className="text-center">
                <div className="text-7xl md:text-9xl font-serif font-light text-foreground/10 mb-4">03</div>
                <div className="font-mono text-xs tracking-[0.15em] text-primary mb-2 uppercase">代の継承</div>
                <div className="text-muted-foreground text-sm font-normal">受け継がれる技術と想い</div>
              </div>

              <div className="text-center">
                <div className="text-7xl md:text-9xl font-serif font-light text-foreground/10 mb-4">10+</div>
                <div className="font-mono text-xs tracking-[0.15em] text-primary mb-2 uppercase">海外パートナー</div>
                <div className="text-muted-foreground text-sm font-normal">世界へ広がるネットワーク</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="surface p-16 md:p-24 rounded-xl relative overflow-hidden">
              <div className="h-px w-full bg-border absolute top-0 left-0" />
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">これからの展望</h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p>
                  時代とともに、製造現場のニーズは常に変化し続けています。
                </p>
                <p>
                  私たちは、創業以来培った「目利き」の力を基盤に、最新のデジタル技術やグローバルなネットワークを融合させ、次世代の「つくる」を支えるソリューションを提供し続けます。
                </p>
                <p className="text-foreground font-medium">
                  「歴史を重んじ、未来を創る。温故知新の精神で、次の100年へ。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
