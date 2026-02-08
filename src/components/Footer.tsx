import { Reveal } from './Reveal';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-white py-12 border-t border-navy-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Address */}
                    <div className="md:col-span-2">
                        <Reveal>
                            <div>
                                <div className="text-2xl font-bold mb-4 tracking-wider">株式会社清水商會</div>
                                <address className="not-italic text-gray-400 text-sm leading-relaxed mb-4">
                                    〒146-0093
                                    <br />
                                    東京都大田区矢口3-1-20
                                    <br />
                                    TEL: 03-5732-2800 / FAX: 03-5732-2891
                                </address>
                                <div className="text-xs text-gray-500 border-t border-navy-800 pt-4 mt-4">
                                    東京都公安委員会許可
                                    <br />
                                    古物工具機械商 第302220706952号
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sitemaps */}
                    <div>
                        <Reveal delay={0.2}>
                            <div>
                                <h4 className="font-bold mb-4 text-royal-400">Services</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#business" className="hover:text-white transition-colors">歯車工具販売</a></li>
                                    <li><a href="#business" className="hover:text-white transition-colors">工作機械販売・メンテ</a></li>
                                    <li><a href="#business" className="hover:text-white transition-colors">製造コーディネート</a></li>
                                    <li><a href="#partners" className="hover:text-white transition-colors">戦略的パートナー</a></li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <Reveal delay={0.4}>
                            <div>
                                <h4 className="font-bold mb-4 text-royal-400">Company</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
                                    <li><a href="#history" className="hover:text-white transition-colors">沿革</a></li>
                                    <li><a href="#company" className="hover:text-white transition-colors">会社概要</a></li>
                                    <li><a href="#company" className="hover:text-white transition-colors">採用情報</a></li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-gray-900 border-gray-800">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Shimizu Shokai Co., Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
