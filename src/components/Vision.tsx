import { Users, Network, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const Vision = () => {
    const values = [
        {
            icon: Users,
            title: 'お客様との対話',
            description: '「何を作りたいか」だけでなく「なぜ作りたいか」まで踏み込み、最適な加工方法と機械を提案します。',
        },
        {
            icon: Network,
            title: '協力工場ネットワーク',
            description: '大田区を中心とした熟練の町工場ネットワークにより、自社設備だけでは不可能な加工も実現します。',
        },
        {
            icon: Zap,
            title: '三者を繋ぐハブ',
            description: 'ユーザー、メーカー、加工業者の間に立ち、スムーズな連携と技術の橋渡しを行います。',
        },
    ];

    return (
        <section id="vision" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Content */}
                    <Reveal>
                        <div>
                            <span className="inline-block text-sky-600 font-bold text-sm tracking-wider uppercase mb-4">
                                Our Vision
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                機械屋の枠を超えた、
                                <br />
                                <span className="text-sky-600">真のパートナーシップ。</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                私たちは単にモノを売って終わりではありません。<br />
                                創業以来、「お客様の困りごとを解決する」ことを第一に考え、<br />
                                知識と経験、そして人との繋がりを大切にしてきました。
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                最新の技術動向をキャッチアップしながらも、<br />
                                古き良き「義理人情」も忘れない。<br />
                                そんな温度感のある取引を心がけています。
                            </p>
                        </div>
                    </Reveal>

                    {/* Values Grid */}
                    <div className="grid gap-6">
                        {values.map((value, index) => (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="flex items-start space-x-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-2">{value.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{value.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-24 border-t border-slate-100 pt-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <Reveal delay={0.2}>
                            <div className="text-center group">
                                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">75<span className="text-2xl">年</span></div>
                                <div className="text-slate-500 text-sm font-medium">創業からの歴史</div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="text-center group">
                                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">1950</div>
                                <div className="text-slate-500 text-sm font-medium">創業年</div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.6}>
                            <div className="text-center group">
                                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">ALL</div>
                                <div className="text-slate-500 text-sm font-medium">全メーカー対応</div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.8}>
                            <div className="text-center group">
                                <div className="text-4xl sm:text-5xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">∞</div>
                                <div className="text-slate-500 text-sm font-medium">サポート体制</div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
