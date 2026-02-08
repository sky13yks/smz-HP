import { ArrowDown, Cog, Wrench, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
            {/* Background Decorations - Cool/Tech Vibe */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                              linear-gradient(90deg, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Abstract Shapes (Blue Accents) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full border border-sky-200/40 opacity-50"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 -left-20 w-[400px] h-[400px] rounded-full border border-cyan-200/40 opacity-50"
                />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-sky-100/50 to-transparent blur-3xl opacity-60" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-5 py-2 mb-8 shadow-sm"
                    >
                        <span className="text-sky-600 font-bold text-sm">創業75年</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-slate-600 text-sm">モノづくりのパートナー</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
                    >
                        <span className="block">工具・機械・加工。</span>
                        <span className="block mt-2 bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-600 bg-clip-text text-transparent pb-2">
                            モノづくりの全工程を繋ぐ
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        単なる工具・機械の販売にとどまらず、加工プロセスを理解し、
                        <br className="hidden sm:block" />
                        お客様・協力工場・清水商會の三者をつなぐ
                        <span className="text-sky-600 font-bold mx-1">「製造のハブ」</span>
                        として最適解をご提案します。
                    </motion.p>

                    {/* Feature icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center items-center space-x-8 sm:space-x-16 mb-12"
                    >
                        <div className="flex flex-col items-center space-y-3 group">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-sky-200 group-hover:shadow-md transition-all duration-300">
                                <Cog className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
                            </div>
                            <span className="text-slate-500 text-sm font-medium group-hover:text-sky-600 transition-colors">歯車工具</span>
                        </div>
                        <div className="flex flex-col items-center space-y-3 group">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-sky-200 group-hover:shadow-md transition-all duration-300">
                                <Wrench className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
                            </div>
                            <span className="text-slate-500 text-sm font-medium group-hover:text-sky-600 transition-colors">工作機械</span>
                        </div>
                        <div className="flex flex-col items-center space-y-3 group">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center group-hover:border-sky-200 group-hover:shadow-md transition-all duration-300">
                                <Factory className="w-8 h-8 text-slate-400 group-hover:text-sky-500 transition-colors" />
                            </div>
                            <span className="text-slate-500 text-sm font-medium group-hover:text-sky-600 transition-colors">製造コーディネート</span>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <a
                            href="#process"
                            className="group inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-sky-600/20 hover:shadow-xl hover:shadow-sky-600/30 ring-offset-2 focus:ring-2 ring-sky-500"
                        >
                            <span>サービス内容を見る</span>
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="#company"
                            className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span>お問い合わせ</span>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-slate-400 rounded-full animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
