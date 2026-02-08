import { Reveal } from './Reveal';

const History = () => {
    const events = [
        { year: '1950年 4月', content: '清水正治個人企業にて、東京都大田区入新井３丁目４５番地で切削工具の販売を開始。' },
        { year: '1953年 4月', content: 'アヅミ㈱特約店となる。' },
        { year: '1959年 3月', content: '㈱園池製作所特約店となる。' },
        { year: '1959年 4月', content: '組織を改め株式会社として、アヅミ㈱代理店となる。' },
        { year: '1961年 1月', content: '㈱不二越歯切工具特約販売店となる。' },
        { year: '1967年 1月', content: '㈱神戸製鋼所特約販売店となる。' },
        { year: '1973年 9月', content: '日本歯車東京グループ取引業者の指定をうける。' },
        { year: '1985年 4月', content: '清水正治が退任、清水進が代表取締役に就任' },
        { year: '1989年 4月', content: '全日本機械業連合会会員となる。' },
        { year: '2007年 4月', content: '東京都公安委員会より古物商許可証NO.302220706952を取得する。' },
        { year: '2011年 4月', content: '清水進が退任、平野芳章が代表取締役に就任' },
        { year: '2013年 7月', content: '中古機械展示場(ツルミマシンセンター)開設する。' },
        { year: '2019年 5月', content: '平野芳章が退任、清水正太が代表取締役に就任' },
    ];

    return (
        <section id="history" className="py-24 lg:py-32 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <span className="inline-block text-royal-600 font-semibold text-sm tracking-wider uppercase mb-4">
                            History
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            75年の歩み
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-royal-600 mx-auto rounded-full mt-6" />
                    </div>
                </Reveal>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform sm:-translate-x-1/2" />

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <Reveal key={index} width="100%" delay={index % 3 * 0.1}>
                                <div className={`relative flex items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                    }`}>
                                    {/* Dot */}
                                    <div className="absolute left-0 sm:left-1/2 w-10 h-10 bg-white border-4 border-royal-500 rounded-full z-10 transform sm:-translate-x-1/2 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-navy-600 rounded-full" />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className={`ml-16 sm:ml-0 w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
                                        }`}>
                                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                                            <div className="text-royal-600 font-bold text-lg mb-2">{event.year}</div>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {event.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
