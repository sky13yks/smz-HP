import { ExternalLink, Cog, Building } from 'lucide-react';
import { Reveal } from './Reveal';

const Partners = () => {
    const partners = [
        {
            name: 'システムエンジニアリング社',
            subtitle: 'System Engineering Co., Ltd.',
            description: '清水商會の協力会社であり、MATRIX社の正規輸入元。ギア生産機械と試験機に特化した専門商社として、ギアに関するすべてをコンサルティング可能です。',
            features: [
                '清水商會の強力なパートナー',
                'MATRIX社 正規輸入元',
                'ギア関連機器の専門商社',
                '機械再生・アフターサービス',
            ],
            url: 'https://www.sec-yokohama.com/',
            icon: Building,
            color: 'navy',
            tag: '正規輸入元',
        },
        {
            name: 'Matrix Precision CO.,LTD.',
            subtitle: '邁萃斯精密股份有限公司',
            description: '台湾発、世界屈指の歯車研削盤メーカー。高精度・効率的な歯車加工機を製造し、欧州・アジアをはじめ世界中で採用されています。                  ',
            features: [
                '歯車研削盤専門メーカー',
                '高精度・高品質な加工',
                'グローバル展開',
                '革新的な技術開発',
            ],
            url: 'https://www.matrix-machine.tw/jp/pro-tool.html',
            icon: Cog,
            color: 'royal',
            tag: 'メーカー',
        },
    ];

    return (
        <section id="partners" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <span className="inline-block text-royal-600 font-semibold text-sm tracking-wider uppercase mb-4">
                            Strategic Partners
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            戦略的パートナー
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            信頼できるパートナーとの連携により、
                            <br className="hidden sm:block" />
                            最高品質の製品とサービスをお届けします。
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-royal-600 mx-auto rounded-full mt-6" />
                    </div>
                </Reveal>

                {/* Partners Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {partners.map((partner, index) => (
                        <Reveal key={index} delay={index * 0.2}>
                            <div
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col"
                            >
                                {/* Header */}
                                <div className={`p-6 sm:p-8 ${partner.color === 'navy'
                                    ? 'bg-gradient-to-br from-navy-600 to-navy-700'
                                    : 'bg-gradient-to-br from-royal-500 to-royal-600'
                                    }`}>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <partner.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{partner.name}</h3>
                                            <p className="text-white/70 text-sm">{partner.subtitle}</p>
                                        </div>
                                        <span className="hidden sm:inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
<<<<<<< HEAD
                                            {partner.tag}
=======
                                            test
>>>>>>> 1dedf99793c8e2611d47a8fbcda8b86e9ed5ab67
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-600 leading-relaxed mb-6">{partner.description}</p>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {partner.features.map((feature, i) => (
                                                <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${partner.color === 'navy' ? 'bg-navy-500' : 'bg-royal-500'
                                                        }`} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${partner.color === 'navy'
                                            ? 'bg-navy-600 hover:bg-navy-700 text-white shadow-lg shadow-navy-600/20 hover:shadow-xl hover:shadow-navy-600/30'
                                            : 'bg-royal-600 hover:bg-royal-700 text-white shadow-lg shadow-royal-600/20 hover:shadow-xl hover:shadow-royal-600/30'
                                            }`}
                                    >
                                        <span>詳細を見る</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Trust Badge */}
                <Reveal width="100%" delay={0.4}>
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-navy-50 to-royal-50 border border-navy-200 px-8 py-4 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-royal-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500">正規販売店として</p>
                                <p className="text-lg font-bold text-gray-900">確かな品質と信頼をお届け</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Partners;
