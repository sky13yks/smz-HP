import { MapPin, Phone, Printer, Mail, Clock, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const Company = () => {
    return (
        <section id="company" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Company Info */}
                    <Reveal>
                        <div>
                            <span className="inline-block text-royal-600 font-semibold text-sm tracking-wider uppercase mb-4">
                                Company Profile
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                                会社概要
                            </h2>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <dl className="space-y-6">
                                    <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                                        <dt className="font-bold text-navy-700">会社名</dt>
                                        <dd className="sm:col-span-2 text-gray-600">株式会社清水商會</dd>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                                        <dt className="font-bold text-navy-700">代表者</dt>
                                        <dd className="sm:col-span-2 text-gray-600">代表取締役　清水 正太</dd>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                                        <dt className="font-bold text-navy-700">創業・設立</dt>
                                        <dd className="sm:col-span-2 text-gray-600">
                                            創業：昭和25年4月1日
                                            <br />
                                            設立：昭和34年4月25日
                                        </dd>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                                        <dt className="font-bold text-navy-700">資本金</dt>
                                        <dd className="sm:col-span-2 text-gray-600">10,000,000円</dd>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                                        <dt className="font-bold text-navy-700">加盟団体</dt>
                                        <dd className="sm:col-span-2 text-gray-600 text-sm">
                                            全日本機械業連合会, 東京都機械業連合会, 城南支部城南機械商協同組合, 公益社団法人蒲田法人会
                                        </dd>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <dt className="font-bold text-navy-700">取引銀行</dt>
                                        <dd className="sm:col-span-2 text-gray-600">
                                            三井住友銀行 蒲田支店
                                            <br />
                                            東日本銀行 蒲田支店
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </Reveal>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <Reveal delay={0.2}>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ</h3>
                                <p className="text-gray-600 mb-8">
                                    加工のご相談、お見積もり依頼など、お気軽にお問い合わせください。
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <a href="tel:03-5732-2800" className="group flex items-center p-6 bg-navy-600 rounded-xl text-white hover:bg-navy-700 transition-colors shadow-lg shadow-navy-600/20">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-white/70 mb-1">お電話でのご連絡</div>
                                            <div className="text-xl font-bold">03-5732-2800</div>
                                        </div>
                                    </a>

                                    <div className="flex items-center p-6 bg-white border border-gray-200 rounded-xl text-gray-800">
                                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                            <Printer className="w-6 h-6 text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">FAXでのご連絡</div>
                                            <div className="text-lg font-bold">03-5732-2891</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Map & Access */}
                        <Reveal delay={0.4}>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <MapPin className="w-5 h-5 text-royal-600 mr-2" />
                                    アクセス
                                </h3>
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
                                    <h4 className="font-bold text-navy-700 mb-2">本社</h4>
                                    <p className="text-gray-600 mb-2">〒146-0093 東京都大田区矢口3-1-20</p>
                                    <p className="text-sm text-gray-500 flex items-center mb-4">
                                        <Clock className="w-4 h-4 mr-1" />
                                        営業時間: 9:00 - 17:00 (土日祝休)
                                    </p>

                                    <h4 className="font-bold text-navy-700 mb-2 pt-4 border-t border-gray-100">ツルミマシンセンター（中古機械展示場）</h4>
                                    <p className="text-gray-600">〒230-0071 神奈川県横浜市鶴見区駒岡4-39-25 </p>
                                </div>
                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md border border-gray-200 bg-gray-100 relative">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.540866874834!2d139.6896573767746!3d35.56499997237953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f8175782729%3A0xc47413554e565ad7!2z44CSMTQ2LTAwOTMg5Lic5Lqs6YO95aSn55Sw5Yy655-i5Y-j77yT5LiB55uu77yR4oiS77yS77yQ!5e0!3m2!1sja!2sjp!4v1707200000000!5m2!1sja!2sjp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    <a
                                        href="https://maps.app.goo.gl/xxxxx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg text-navy-700 flex items-center hover:bg-gray-50 transition-colors"
                                    >
                                        Google Mapで開く
                                        <ExternalLink className="w-3 h-3 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </Reveal>

                        {/* Recruiting */}
                        <Reveal delay={0.6}>
                            <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-8 text-white text-center">
                                <h3 className="text-xl font-bold mb-4">採用情報</h3>
                                <p className="text-white/80 mb-6 text-sm">
                                    私たちと一緒に「モノづくりのハブ」として働きませんか？
                                    <br />
                                    経験不問。やる気のある方を募集しています。
                                </p>
                                <a
                                    href="mailto:info@shimizu-s.co.jp" // ダミー
                                    className="inline-flex items-center bg-white text-navy-800 px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    採用について問い合わせる
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
