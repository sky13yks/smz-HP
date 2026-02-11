import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  year: string;
  month?: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1985",
    month: "12月",
    title: "会社設立",
    description: "東京都港区にて、精密機械部品の輸入商社として創業。創業メンバー5名でスタート。"
  },
  {
    year: "1988",
    title: "欧州メーカーとの取引開始",
    description: "ドイツ・スイスの精密歯車メーカーとの直接取引を開始。技術理解の重要性を認識。"
  },
  {
    year: "1992",
    title: "技術部門を新設",
    description: "営業だけでなく、技術者を採用し技術部門を設立。図面レビュー・仕様検討に対応。"
  },
  {
    year: "1998",
    title: "ISO 9001 認証取得",
    description: "品質管理体制を強化。顧客の要求品質に応える体制を構築。"
  },
  {
    year: "2003",
    title: "アジア調達網の確立",
    description: "中国・台湾の加工パートナーとの連携を開始。コストと品質のバランスを追求。"
  },
  {
    year: "2010",
    title: "新本社へ移転",
    description: "六本木の現オフィスへ移転。技術資料室とサンプル展示スペースを拡充。"
  },
  {
    year: "2015",
    title: "創業30周年",
    description: "累計取引社数1,200社を突破。長期取引先との信頼関係が事業基盤に。"
  },
  {
    year: "2018",
    title: "カスタム設計サービス開始",
    description: "標準品だけでなく、特殊仕様の設計・製作対応を本格化。技術者を15名体制に。"
  },
  {
    year: "2020",
    title: "デジタル対応強化",
    description: "3Dデータ対応、オンライン技術相談など、リモート環境でも技術支援を継続。"
  },
  {
    year: "2023",
    title: "新HQ拠点の計画",
    description: "次世代に向けた体制強化。若手技術者の育成と、グローバル調達網の再構築を進行中。"
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
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-8 md:gap-12">
        {/* Year marker */}
        <div className="flex-shrink-0 w-24 md:w-32 text-right">
          <div className="text-2xl md:text-3xl text-[#2563eb]">{item.year}</div>
          {item.month && <div className="text-sm text-gray-500">{item.month}</div>}
        </div>

        {/* Timeline line */}
        <div className="relative flex-shrink-0">
          <div className="w-4 h-4 rounded-full bg-[#2563eb] border-4 border-white shadow-md relative z-10" />
          {index < timelineData.length - 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <h3 className="text-xl mb-2 text-[#1a2e5a]">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export function History() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            会社沿革
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            1985年の創業から現在まで。<br />
            技術理解と信頼関係を積み重ね、着実に歩んできた歴史です。
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              派手な成長ではなく、一つひとつの取引先との信頼関係を丁寧に築いてきました。
              技術者が安心して相談できる商社であり続けるために、
              技術理解の深化と品質管理体制の強化を継続してきた軌跡をご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItemComponent key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-12 text-center">主要な数字</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">40</div>
                <div className="text-sm text-gray-500 mb-1">YEARS</div>
                <div className="text-gray-700">創業からの年数</div>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">1,200+</div>
                <div className="text-sm text-gray-500 mb-1">CLIENTS</div>
                <div className="text-gray-700">累計取引社数</div>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">28</div>
                <div className="text-sm text-gray-500 mb-1">ENGINEERS</div>
                <div className="text-gray-700">在籍技術���数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-8 text-center">これからの展望</h2>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 leading-relaxed mb-6">
                創業から40年。これまで築いてきた信頼関係を基盤に、
                次の世代に向けた準備を進めています。
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                技術の高度化、グローバル化、デジタル化。
                環境は変わっても、「技術を理解し、誠実に対応する」という姿勢は変わりません。
              </p>

              <p className="text-gray-700 leading-relaxed">
                若手技術者の育成、サプライチェーンの再構築、デジタルツールの活用。
                時代に合わせて手法は進化させながら、技術商社としての本質を守り続けます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
