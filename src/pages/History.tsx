import { useEffect, useRef, useState } from "react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

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
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex gap-8 md:gap-16">
        {/* Year marker */}
        <div className="flex-shrink-0 w-24 md:w-40 text-right pt-2">
          <div className="text-3xl md:text-5xl font-black text-white leading-none italic">{item.year}</div>
          {item.month && <div className="text-[10px] font-black tracking-widest text-blue-400 mt-2 uppercase">{item.month}</div>}
        </div>

        {/* Timeline line */}
        <div className="relative flex-shrink-0">
          <div className={`w-3 h-3 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] relative z-10 transition-colors duration-500 ${isVisible ? "bg-blue-500" : "bg-white/10"}`} />
          {index < timelineData.length - 1 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-blue-500/50 to-transparent" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-20">
          <div className="glass-panel p-8 rounded-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function History() {
  useDocumentTitle('沿革');
  return (
    <div className="min-h-screen bg-background bg-grid-white">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              OUR <br />
              <span className="text-gradient-blue uppercase">History</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              1950年の創業から現在まで。<br />
              切削工具の専門商社として歩んできた、75年の研鑽の軌跡。
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
      <section className="py-32 relative bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-20 text-center italic opacity-20 uppercase tracking-[0.5em]">Milestones</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 italic">75</div>
                <div className="text-xs font-black tracking-[0.4em] text-blue-400 mb-2 uppercase">Years of Expertise</div>
                <div className="text-white/50 text-sm font-bold">創業からの不変の信頼</div>
              </div>

              <div className="text-center group">
                <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 italic">03</div>
                <div className="text-xs font-black tracking-[0.4em] text-blue-400 mb-2 uppercase">Generations</div>
                <div className="text-white/50 text-sm font-bold">受け継がれる技術と想い</div>
              </div>

              <div className="text-center group">
                <div className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 italic">10+</div>
                <div className="text-xs font-black tracking-[0.4em] text-blue-400 mb-2 uppercase">Global Partners</div>
                <div className="text-white/50 text-sm font-bold">世界へ広がるネットワーク</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-panel p-16 md:p-24 rounded-[4rem] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <h2 className="text-3xl md:text-4xl font-black mb-12">これからの展望</h2>
              <div className="space-y-8 text-white/50 text-lg leading-relaxed">
                <p>
                  時代とともに、製造現場のニーズは常に変化し続けています。
                </p>
                <p>
                  私たちは、75年で培った「目利き」の力を基盤に、最新のデジタル技術やグローバルなネットワークを融合させ、次世代の「つくる」を支えるソリューションを提供し続けます。
                </p>
                <p className="text-white font-bold italic">
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
