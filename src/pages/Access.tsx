import { MapPin, Train, Car, Clock, Phone, Building2, Users } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Access() {
  useDocumentTitle('アクセス');
  return (
    <div className="min-h-screen bg-background bg-grid-white">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              LOCATIONS <br />
              <span className="text-gradient-blue uppercase">Access</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              本社および各拠点へのアクセス。
              国内製造業の集積地、大田区と横浜をベースに、迅速なサポートを展開しています。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fade-in">
            {/* Headquarters */}
            <div className="glass-panel p-10 md:p-12 rounded-[3rem] relative overflow-hidden group">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-blue-400">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black italic">HEADQUARTERS</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 truncate">Main Office & Administration</p>
                  </div>
                </div>

                <div className="space-y-6 text-white/80">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Location</p>
                    <p className="text-lg leading-relaxed">
                      〒146-0093<br />
                      東京都大田区矢口3-1-20
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Direct Line</p>
                    <p className="text-xl font-mono font-bold tracking-tight">03.5732.2800</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-white/50">
                    <Train size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-white/30 mb-2">Public Transport</h3>
                    <p className="text-sm">東急多摩川線「矢口渡駅」より徒歩約10分</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-white/50">
                    <Car size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-white/30 mb-2">By Vehicle</h3>
                    <p className="text-sm">首都高速「羽田」出口より約15分</p>
                    <p className="text-[10px] text-white/30 mt-1">※駐車場あり（事前予約推奨）</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="https://maps.app.goo.gl/De8Qp5ebq1YKShN66?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-center font-black tracking-[0.2em] text-[10px] uppercase hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
                >
                  Open Coordinates in Maps
                </a>
              </div>
            </div>

            {/* Tsurumi Machine Center */}
            <div className="glass-panel p-10 md:p-12 rounded-[3rem] relative overflow-hidden group bg-white/5">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black italic">TECH CENTER</h2>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30 truncate">Tsurumi Machinery Showroom</p>
                  </div>
                </div>

                <div className="space-y-6 text-white/80">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Location</p>
                    <p className="text-lg leading-relaxed">
                      〒230-0071<br />
                      神奈川県横浜市鶴見区駒岡4-39-25
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">Direct Line</p>
                    <p className="text-xl font-mono font-bold tracking-tight">045.574.3019</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl bg-white/5 border-white/5 mb-10">
                <p className="text-sm text-white/50 leading-relaxed font-bold">
                  中古歯車機械・研削盤を常時多数展示しております。
                  実物をご覧いただきながら、加工プランのシミュレーションが可能です。
                </p>
              </div>

              <div className="mt-auto">
                <a
                  href="https://maps.app.goo.gl/W1pkgZqTnvLtqAC29?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 bg-white/5 border border-white/10 rounded-2xl text-center font-black tracking-[0.2em] text-[10px] uppercase hover:bg-white hover:text-black transition-all duration-500"
                >
                  Open Coordinates in Maps
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="glass-panel p-8 rounded-3xl border-white/5">
              <div className="text-blue-400 mb-4"><Clock size={24} /></div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Service Hours</h3>
              <p className="text-xs text-white/50 leading-relaxed">平日 9:00 - 18:00<br />(土日祝は事前にご相談ください)</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border-white/5">
              <div className="text-blue-400 mb-4"><Users size={24} /></div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Consultation</h3>
              <p className="text-xs text-white/50 leading-relaxed">展示場にて、経験豊富な技術者による実機を用いたご相談を承ります。</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border-white/5">
              <div className="text-blue-400 mb-4"><MapPin size={24} /></div>
              <h3 className="text-sm font-black uppercase tracking-widest mb-3">Online Session</h3>
              <p className="text-xs text-white/50 leading-relaxed">Web会議を通じた遠隔での製品説明・状態確認も可能です。</p>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/[0.03] animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8 italic">READY TO <span className="text-gradient-blue uppercase">Connect?</span></h2>
              <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                ご来社のご予約、技術相談のお申し込みは、<br className="hidden md:block" />
                以下よりお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a
                  href="tel:03-5732-2800"
                  className="px-12 py-5 glass-panel rounded-full font-black tracking-widest text-lg transition-all hover:bg-white/10 flex items-center gap-4"
                >
                  <Phone size={24} /> 03.5732.2800
                </a>
                <a
                  href="/contact"
                  className="px-12 py-5 bg-blue-600 rounded-full font-black tracking-widest text-lg transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105"
                >
                  SEND MESSAGE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

