import { Target, Users, Building2, Heart } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';

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
              私たちが大切にしている姿勢と、創業以来の歩みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* CEO Greeting */}
      <section className="pb-32">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border p-10 md:p-20 rounded-xl relative overflow-hidden">
              <div className="grid lg:grid-cols-1 gap-12">
                <div>
                  <h2 className="text-sm font-medium tracking-[0.15em] text-primary uppercase mb-6">代表挨拶</h2>
                  <p className="text-2xl md:text-3xl font-medium mb-12 leading-tight">
                    温故知新。<br />
                    積み重ねた経験を、これからの「つくる」へ。
                  </p>

                  <div className="max-w-none space-y-8 text-foreground/70 text-base leading-[2]">
                    <p>
                      株式会社清水商會は、1950年の創業以来、歯車用工具の専門商社として歩んでまいりました。
                    </p>
                    <p>
                      私たちが大切にしてきたのは、お客様の現場に寄り添う姿勢です。
                      カタログの数値だけでは判断できない「機械との相性」や「工具の癖」を、
                      長年の経験で見極め、最適な一台、最適な一本をご提案してきました。
                      この目利きの力こそが、私たちの何よりの財産です。
                    </p>
                    <p>
                      製造業を取り巻く環境は大きく変化しています。
                      私たちはその変化を捉え、従来の商社の枠を超えた挑戦を続けています。
                      新品・中古工作機械の選定から、修理・メンテナンス、加工の代行、
                      さらには海外メーカーからの直接調達まで——
                      お客様の「困った」に対して、ワンストップでお応えできる体制を整えてまいりました。
                    </p>
                    <p>
                      私たちの指針は<strong className="text-foreground font-medium">「温故知新」</strong>です。
                      先人から受け継いだ知識と経験を土台に、新しい技術や発想を取り入れることで、
                      日本のものづくりの未来に貢献したい。
                      その想いを胸に、全国のお客様と共に歩み続けます。
                    </p>
                  </div>

                  <div className="mt-20 pt-12 border-t border-border flex justify-end">
                    <div className="text-right">
                      <p className="text-xs tracking-wider text-muted-foreground mb-3">代表取締役</p>
                      <p className="text-4xl tracking-widest" style={{ fontFamily: "'Zen Old Mincho', serif" }}>清水 正太</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></ScrollRevealSection>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-serif font-light mb-4 uppercase">私たちの理念</h2>
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
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div></ScrollRevealSection>
      </section>

      {/* Company Profile (Grid Style) */}
      <section className="py-32 bg-secondary">
        <ScrollRevealSection><div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-light mb-16 text-center italic">会社概要</h2>

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
                  <div className="p-5 md:p-6 bg-secondary text-sm tracking-wider text-muted-foreground flex items-center">
                    {row.label}
                  </div>
                  <div className="p-5 md:p-6 col-span-3 text-sm text-foreground/80">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div></ScrollRevealSection>
      </section>
    </div>
  );
}
