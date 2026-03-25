import { Target, Users, Building2, Heart } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Company() {
  useDocumentTitle('会社情報');
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-none">
              会社情報
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              歯車加工の構造を理解し、技術者と対話できる専門商社として。<br />
              私たちが大切にしている姿勢と、75年の歩みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Greeting */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border p-10 md:p-20 rounded-xl relative overflow-hidden">
              <div className="grid lg:grid-cols-1 gap-12">
                <div>
                  <h2 className="font-mono text-xs font-medium tracking-[0.15em] text-primary uppercase mb-6">代表挨拶</h2>
                  <p className="text-3xl md:text-4xl font-medium mb-12 leading-tight">
                    温故知新。<br />
                    75年の研鑽を、これからの「つくる」へ。
                  </p>

                  <div className="max-w-none space-y-8 text-foreground/70 text-lg leading-relaxed">
                    <p>
                      東京都大田区という、世界に誇る「ものづくりの聖地」で、株式会社清水商會は歩みを続けてまいりました。
                    </p>
                    <p>
                      私たちの原点は、昭和20年代から続く歯車用工具の専門商社にあります。
                      創業以来、75年以上にわたり、職人の方々が求める「精度」と「信頼」に向き合い、共に汗を流してきました。
                      その中で培われた、機械の深奥に触れる知識と目利きこそが、私たちの何よりの財産です。
                    </p>
                    <p>
                      今、製造業を取り巻く環境は激しく変化しています。
                      私たちはその変化を捉え、従来の商社の枠を超えた挑戦を続けています。
                      新品工作機械の提案はもちろん、眠っていた価値を蘇らせる中古機械の取り扱いや修理、
                      さらにはお客様の現場の負荷を軽減する「機械加工の代行業務」まで。
                    </p>
                    <p>
                      私たちの指針は<strong className="text-foreground font-medium italic">「温故知新」</strong>です。
                      古きを温め、これまでに積み上げてきた膨大な経験と技術があるからこそ、
                      次世代を見据えた未来への確かな提案ができると確信しています。
                    </p>
                  </div>

                  <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                      <p className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase mb-2">代表取締役</p>
                      <p className="text-3xl font-medium">清水 正太</p>
                    </div>
                    <div className="text-right">
                      <p className="text-6xl font-light opacity-5 select-none absolute bottom-10 right-10">SHIMIZU</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-light mb-4 uppercase">私たちの理念</h2>
            <div className="h-px w-20 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "技術理解の深さ",
                desc: "カタログを渡すだけの対応はしません。技術者と同じ言語で会話できるよう、バックラッシュ、インボリュート曲線等の専門知識を研鑽し続けています。"
              },
              {
                icon: Users,
                title: "長期的な関係構築",
                desc: "短期的な利益を追わず、信頼関係を最優先します。相談段階から納入後のフォローまで、一貫して技術的責任を持つことが私たちの矜持です。"
              },
              {
                icon: Building2,
                title: "メーカー中立性",
                desc: "特定メーカーに縛られず、国内外の多様なネットワークから、お客様の要求仕様に対して最も合理的な選択肢をフラットに提示します。"
              },
              {
                icon: Heart,
                title: "誠実な対応",
                desc: "できないことは「できない」と正直に伝えます。最初から現実的な提案をすることが、結果的にものづくりの現場を守ることに繋がると信じています。"
              }
            ].map((v, i) => (
              <div key={i} className="bg-card border border-border p-10 rounded-xl group hover:border-primary/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile (Grid Style) */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-light mb-16 text-center italic">会社概要</h2>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {[
                { label: "商号", value: "株式会社清水商會 / Shimizu Shokai Co., Ltd." },
                { label: "創業 / 設立", value: "1950年4月（創業） / 1959年4月（設立）" },
                { label: "資本金", value: "10,000,000円" },
                { label: "代表者", value: "代表取締役 清水 正太" },
                { label: "所在地", value: "〒146-0093 東京都大田区矢口3-1-20" },
                { label: "主要銀行", value: "三井住友銀行 蒲田支店" },
                { label: "許認可", value: "古物工具機械商 第302220706952号" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 border-b border-border last:border-0">
                  <div className="p-6 md:p-8 bg-secondary font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase flex items-center">
                    {row.label}
                  </div>
                  <div className="p-6 md:p-8 col-span-3 text-foreground/80 font-medium">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
