import { ExternalLink, Cog, Wrench, Users, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const BusinessPillars = () => {
    const pillars = [
        {
            icon: Cog,
            title: '歯車工具販売',
            subtitle: 'Gear Cutting Tools',
            description: '創業以来の主力事業。ホブ、ピニオンカッター、ブローチなど高品質な歯車工具を取り揃え、精密加工の現場を支えます。',
            features: [
                'ホブ各種（標準・ウォーム・荒切り・ミクロン）',
                'ピニオンカッター各種(ディスク型・ベル型・シャンク型)',
                'ブローチ各種（キー・サーフェス）',
                'マスターギヤ・特殊工具製作',
            ],
            makers: ['アヅミ', '不二越', '大和精密工具', 'DTR(韓国)', '他'],
            color: 'navy',
            badge: '主力事業',
        },
        {
            icon: Wrench,
            title: '工作機械販売・メンテ',
            subtitle: 'Machine Tools',
            description: '新品から中古、輸入機まで幅広く対応。1台から工場一括整理まで、機械修理・オーバーホール・改造も承ります。',
            features: [
                '新品工作機械',
                '中古工作機械',
                '工場一括整理対応',
                '修理・オーバーホール・改造',
            ],
            highlight: 'ツルミマシンセンター（中古機械展示場）',
            inventoryLink: 'https://www.jp.usedmachinery.bz/members/general_view/356',
            color: 'royal',
            badge: '展示場あり',
        },
        {
            icon: Users,
            title: '製造コーディネート',
            subtitle: 'Manufacturing Coordination',
            description: '協力工場ネットワークを活用し、加工の請負から技術コンサルティングまで、製造現場の課題をトータルで解決します。',
            features: [
                '加工請負（歯車・各種部品）',
                '技術コンサルティング',
                '協力工場との連携',
                '品質管理・納期管理',
            ],
            color: 'gradient',
            badge: '差別化事業',
        },
    ];

    return (
        <section id="business" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <span className="inline-block text-royal-600 font-semibold text-sm tracking-wider uppercase mb-4">
                            Our Business
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            3つの事業領域
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            75年の歴史で培った専門知識と信頼のネットワークで、
                            <br className="hidden sm:block" />
                            製造業のあらゆるニーズにお応えします。
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-royal-600 mx-auto rounded-full mt-6" />
                    </div>
                </Reveal>

                {/* Pillars Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <div
                                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
                            >
                                {/* Badge */}
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${pillar.color === 'navy' ? 'bg-navy-100 text-navy-700' :
                                    pillar.color === 'royal' ? 'bg-royal-100 text-royal-700' :
                                        'bg-gradient-to-r from-navy-600 to-royal-600 text-white'
                                    }`}>
                                    {pillar.badge}
                                </div>

                                {/* Header */}
                                <div className={`p-8 ${pillar.color === 'navy' ? 'bg-gradient-to-br from-navy-600 to-navy-700' :
                                    pillar.color === 'royal' ? 'bg-gradient-to-br from-royal-500 to-royal-600' :
                                        'bg-gradient-to-br from-navy-600 via-royal-600 to-navy-700'
                                    }`}>
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <pillar.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{pillar.title}</h3>
                                    <p className="text-white/70 text-sm">{pillar.subtitle}</p>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        {pillar.features.map((feature, i) => (
                                            <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                                                <ArrowRight className="w-4 h-4 text-royal-500 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Makers (for gear tools) */}
                                    {pillar.makers && (
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-xs text-gray-500 mb-2">主要取扱メーカー</p>
                                            <div className="flex flex-wrap gap-2">
                                                {pillar.makers.map((maker, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                        {maker}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Highlight and Inventory Link (for machine tools) */}
                                    {pillar.highlight && (
                                        <div className="pt-4 border-t border-gray-100 space-y-4">
                                            <div className="bg-royal-50 border border-royal-200 rounded-lg p-3">
                                                <p className="text-sm text-royal-700 font-medium">{pillar.highlight}</p>
                                                <p className="text-xs text-royal-600 mt-1">2013年開設の中古機械専門展示場</p>
                                            </div>
                                            {pillar.inventoryLink && (
                                                <a
                                                    href={pillar.inventoryLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-royal-500 to-royal-600 hover:from-royal-600 hover:to-royal-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-royal-500/20 hover:shadow-xl hover:shadow-royal-500/30"
                                                >
                                                    <span>中古機械在庫を見る</span>
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Products Detail */}
                <Reveal width="100%" delay={0.6}>
                    <div className="mt-16 bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">取扱い品目</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-semibold text-navy-700 mb-2">ホブ各種</h4>
                                <p className="text-sm text-gray-600">標準ホブ、ウォームホブ、荒切り用ホブ、ミクロンホブ</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-semibold text-navy-700 mb-2">ピニオンカッター</h4>
                                <p className="text-sm text-gray-600">柄付ピニオンカッター等</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-semibold text-navy-700 mb-2">ブローチ各種</h4>
                                <p className="text-sm text-gray-600">キーブローチ、サーフェスブローチ等</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-semibold text-navy-700 mb-2">カッター各種</h4>
                                <p className="text-sm text-gray-600">ラックカッター、キーシータカッター、ウォームカッター</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default BusinessPillars;
