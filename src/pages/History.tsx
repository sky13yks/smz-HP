import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  year: string;
  month?: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "1950",
    month: "4月",
    title: "個人企業として創業",
    description: "清水正治が東京都大田区入新井３丁目４５番地で切削工具の販売を開始。"
  },
  {
    year: "1953",
    month: "4月",
    title: "アヅミ㈱特約店に",
    description: "アヅミ㈱の特約店の指定を受ける。"
  },
  {
    year: "1954",
    month: "10月",
    title: "本社移転",
    description: "東京都大田区入新井３丁目１４８番地に移転。"
  },
  {
    year: "1959",
    month: "1月",
    title: "銀座へ移転",
    description: "東京都中央区銀座七丁目３番地に移転。"
  },
  {
    year: "1959",
    month: "3月",
    title: "園池製作所の特約店に",
    description: "㈱園池製作所の特約店の指定を受ける。"
  },
  {
    year: "1959",
    month: "4月",
    title: "株式会社として設立",
    description: "組織を改め株式会社として設立。アヅミ㈱の代理店となる。"
  },
  {
    year: "1961",
    month: "1月",
    title: "不二越歯切工具の特約販売店に",
    description: "㈱不二越の歯切工具特約販売店の指定を受ける。"
  },
  {
    year: "1967",
    month: "1月",
    title: "神戸製鋼所の特約販売店に",
    description: "㈱神戸製鋼所の特約販売店の指定を受ける。"
  },
  {
    year: "1968",
    month: "10月",
    title: "銀座八丁目へ本社移転",
    description: "本社を東京都中央区銀座八丁目１７番地に移転。"
  },
  {
    year: "1973",
    month: "9月",
    title: "日本歯車東京グループ取引業者に指定",
    description: "日本歯車東京グループの取引業者の指定を受ける。"
  },
  {
    year: "1974",
    month: "12月",
    title: "築地へ本社移転",
    description: "本社を東京都中央区築地二丁目３番地に移転。"
  },
  {
    year: "1984",
    month: "10月",
    title: "東京商工会議所会員に",
    description: "東京商工会議所の会員となる。"
  },
  {
    year: "1985",
    month: "4月",
    title: "代表取締役交代",
    description: "清水正治が退任し、清水進が代表取締役に就任。"
  },
  {
    year: "1989",
    month: "4月",
    title: "全日本機械業連合会会員に",
    description: "全日本機械業連合会の会員となる。"
  },
  {
    year: "1992",
    month: "6月",
    title: "大田区西馬込へ本社移転",
    description: "本社を東京都大田区西馬込一丁目２６番地に移転。"
  },
  {
    year: "1995",
    month: "7月",
    title: "資本金を増資",
    description: "資本金を1,000万円に増資。"
  },
  {
    year: "2007",
    month: "4月",
    title: "古物商許可証取得",
    description: "東京都公安委員会より古物商許可証（NO.302220706952）を取得。"
  },
  {
    year: "2008",
    month: "1月",
    title: "矢口へ本社移転",
    description: "本社を東京都大田区矢口三丁目１番地に移転。"
  },
  {
    year: "2011",
    month: "4月",
    title: "代表取締役交代",
    description: "清水進が退任し、平野芳章が代表取締役に就任。"
  },
  {
    year: "2013",
    month: "7月",
    title: "中古機械展示場開設",
    description: "中古機械展示場『ツルミマシンセンター』を開設。"
  },
  {
    year: "2019",
    month: "5月",
    title: "代表取締役交代",
    description: "平野芳章が退任し、清水正太が代表取締役に就任。"
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
            1950年の創業から現在まで。<br />
            切削工具の販売から中古機械の展示場まで。<br />
            70年以上にわたって歩んできた歩みです。
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              1950年、清水正治が個人企業として切削工具の販売をはじめました。
              以来、様々なメーカーとの特約店・代理店指定を受け、
              業界での地位を確立してきました。
              組織の成長とともに代表交代を経て、
              現在は中古機械展示場の運営など、事業を展開しています。
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
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">75</div>
                <div className="text-sm text-gray-500 mb-1">YEARS</div>
                <div className="text-gray-700">創業からの年数</div>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">3</div>
                <div className="text-sm text-gray-500 mb-1">GENERATIONS</div>
                <div className="text-gray-700">代表取締役の世代交代</div>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#2563eb] mb-2">10+</div>
                <div className="text-sm text-gray-500 mb-1">LOCATIONS</div>
                <div className="text-gray-700">本社移転の回数</div>
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
                1950年の創業から75年。
                複数の代表取締役の世代交代を経て、現在に至ります。
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                切削工具の販売からはじまり、様々なメーカーの特約店・代理店を務め、
                現在は中古機械の展示場も運営しています。
              </p>

              <p className="text-gray-700 leading-relaxed">
                時代とともに事業の形態は変わっていきますが、
                顧客との信頼関係を大切にし、
                確実で誠実な対応を心がけ続けます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
