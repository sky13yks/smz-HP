import { MapPin, Train, Car, Clock, Phone, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';

export function Access() {
  useDocumentTitle('アクセス');
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-none">
              アクセス
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              本社および各拠点へのアクセス。
              国内製造業の集積地、大田区と横浜をベースに、迅速なサポートを展開しています。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <ScrollRevealSection><div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fade-in">
            {/* Headquarters */}
            <div className="bg-card border border-border p-10 md:p-12 rounded-xl relative overflow-hidden group flex flex-col">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-card border border-border rounded-lg w-12 h-12 flex items-center justify-center text-primary">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium">本社</h2>
                    <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground truncate">本社事務所</p>
                  </div>
                </div>

                <div className="space-y-6 text-foreground/80">
                  <div>
                    <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">所在地</p>
                    <p className="text-lg leading-relaxed">
                      〒146-0093<br />
                      東京都大田区矢口3-1-20
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">電話番号</p>
                    <p className="text-xl font-mono font-medium tracking-tight">03.5732.2800</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground">
                    <Train size={20} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-2">電車でお越しの場合</h3>
                    <p className="text-sm">東急多摩川線「矢口渡駅」より徒歩約10分</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground">
                    <Car size={20} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-2">お車でお越しの場合</h3>
                    <p className="text-sm">首都高速「羽田」出口より約15分</p>
                    <p className="text-xs text-muted-foreground mt-1">※駐車場あり（事前予約推奨）</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-12">
                <a
                  href="https://maps.app.goo.gl/De8Qp5ebq1YKShN66?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 border border-border rounded-lg text-center font-medium tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Google マップで開く
                </a>
              </div>
            </div>

            {/* Tsurumi Machine Center */}
            <div className="bg-card border border-border p-10 md:p-12 rounded-xl relative overflow-hidden group flex flex-col">
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-card border border-border rounded-lg w-12 h-12 flex items-center justify-center text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium">テクニカルセンター</h2>
                    <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground truncate">鶴見マシンセンター</p>
                  </div>
                </div>

                <div className="space-y-6 text-foreground/80">
                  <div>
                    <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">所在地</p>
                    <p className="text-lg leading-relaxed">
                      〒230-0071<br />
                      神奈川県横浜市鶴見区駒岡4-39-25
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-[0.15em] text-primary mb-2">電話番号</p>
                    <p className="text-xl font-mono font-medium tracking-tight">045.574.3019</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary border border-border p-6 rounded-lg mb-10">
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  中古歯車機械・研削盤を常時多数展示しております。
                  実物をご覧いただきながら、加工プランのシミュレーションが可能です。
                </p>
              </div>

              <div className="mt-auto pt-10">
                <a
                  href="https://maps.app.goo.gl/W1pkgZqTnvLtqAC29?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 border border-border rounded-lg text-center font-medium tracking-wider text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Google マップで開く
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-card border border-border p-8 rounded-xl">
              <div className="text-primary mb-4"><Clock size={24} /></div>
              <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-3">営業時間</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">平日 9:00 - 18:00<br />(土日祝は事前にご相談ください)</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-xl">
              <div className="text-primary mb-4"><Users size={24} /></div>
              <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-3">技術相談</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">展示場にて、経験豊富な技術者による実機を用いたご相談を承ります。</p>
            </div>
            <div className="bg-card border border-border p-8 rounded-xl">
              <div className="text-primary mb-4"><MapPin size={24} /></div>
              <h3 className="font-mono text-xs tracking-[0.15em] text-muted-foreground mb-3">オンライン対応</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Web会議を通じた遠隔での製品説明・状態確認も可能です。</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border p-16 md:p-24 rounded-xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">お気軽に<span className="text-primary">お問い合わせください</span></h2>
              <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                ご来社のご予約、技術相談のお申し込みは、<br className="hidden md:block" />
                以下よりお気軽にお問い合わせください。
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a
                  href="tel:03-5732-2800"
                  className="px-12 py-5 bg-card border border-border rounded-md font-medium tracking-wider text-lg transition-all hover:bg-secondary flex items-center gap-4"
                >
                  <Phone size={24} /> 03.5732.2800
                </a>
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-primary text-primary-foreground rounded-md font-medium tracking-wider text-lg transition-all hover:bg-primary/90"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div></ScrollRevealSection>
      </section>
    </div>
  );
}
