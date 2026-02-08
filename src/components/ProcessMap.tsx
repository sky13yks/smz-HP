import { MessageSquare, Search, PenTool, RefreshCw, ArrowRight, ArrowDown } from 'lucide-react';
import { Reveal } from './Reveal';

const ProcessMap = () => {
    const steps = [
        {
            icon: MessageSquare,
            title: 'ご相談・ヒアリング',
            description: '「こんなモノを作りたい」「今の設備で困っている」など、まずは現場の声をお聞かせください。',
            color: 'from-sky-500 to-cyan-400',
        },
        {
            icon: Search,
            title: '機材・工法選定',
            description: '新品・中古機械から、最適なツール、あるいは外部委託まで。中立的な立場でベストな手段を選定します。',
            color: 'from-cyan-400 to-sky-400',
        },
        {
            icon: PenTool,
            title: '加工サポート・納品',
            description: '機械の据付はもちろん、加工の立ち上げ支援や、協力工場への依頼まで手厚くフォローします。',
            color: 'from-sky-400 to-sky-500',
        },
        {
            icon: RefreshCw,
            title: 'メンテナンス・改善',
            description: '納品後も安心。修理対応やオーバーホール、将来的な工程改善まで末長くサポートします。',
            color: 'from-sky-500 to-slate-500',
        },
    ];

    return (
        <section id="process" className="py-24 lg:py-32 bg-slate-50 text-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <span className="inline-block text-sky-600 font-bold text-sm tracking-wider uppercase mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            相談からメンテナンスまで、
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                                ワンストップで解決。
                            </span>
                        </h2>
                    </div>
                </Reveal>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-slate-200" />

                    <div className="grid lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <Reveal key={index} delay={index * 0.2}>
                                <div className="relative group pt-8">
                                    {/* Step Number Bubble */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-sky-600 border-4 border-slate-50 z-10 shadow-sm group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>

                                    {/* Main Card */}
                                    <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 h-full relative z-0 mt-6 text-center">
                                        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-md shadow-sky-200 group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-slate-800">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {step.description}
                                        </p>

                                        {/* Mobile Arrow */}
                                        <div className="lg:hidden flex justify-center text-slate-300 py-2">
                                            {index < steps.length - 1 && <ArrowDown className="w-6 h-6 animate-bounce" />}
                                        </div>
                                    </div>

                                    {/* Desktop Arrow */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-[60px] -right-4 transform -translate-y-1/2 z-10">
                                            <div className="bg-slate-50 rounded-full p-2">
                                                <ArrowRight className="w-5 h-5 text-slate-300" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessMap;
