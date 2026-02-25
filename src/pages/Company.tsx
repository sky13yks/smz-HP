import { Building2, Users, Target, Heart } from "lucide-react";

export function Company() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            会社情報
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            歯車加工の構造を理解し、技術者と対話できる商社として。<br />
            私たちが大切にしている姿勢と、会社の立ち位置をご紹介します。
          </p>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-12">企業理念</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                歯車加工の世界において、商社の役割は単なる「モノの流通」ではありません。
                ホブカッターの刃先形状、工作機械の構造、加工時の切削条件。
                これらを理解した上で、技術的な相談に応えられることが、
                商社として存在する意味だと考えています。
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                工具・機械・加工という3つの領域を横断的に理解することで、
                「この図面には、どの工具が最適か」「機械の精度調整はどうすればいいか」
                「小ロットでも対応してくれる加工先はあるか」といった、
                現場の具体的な課題に対して、的確な回答を提示できます。
              </p>

              <p className="text-gray-700 leading-relaxed">
                派手な営業活動は行いません。
                必要とされる時に、技術的に正しい提案ができる準備を整え、
                長期的な信頼関係を築くことに注力しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-12 text-center">大切にしていること</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl mb-4 text-[#1a2e5a]">技術理解の深さ</h3>
                <p className="text-gray-600 leading-relaxed">
                  歯車のバックラッシュ、インボリュート曲線の特性、熱処理の影響。
                  技術者と同じ言語で会話できるよう、継続的な学習を続けています。
                  カタログを渡すだけの対応はしません。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl mb-4 text-[#1a2e5a]">長期的な関係構築</h3>
                <p className="text-gray-600 leading-relaxed">
                  短期的な利益を追わず、技術者との信頼関係を最優先します。
                  相談段階から丁寧に対応し、納入後のフォローまで責任を持つ。
                  それが結果的に、長く続く取引に繋がると考えています。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl mb-4 text-[#1a2e5a]">メーカー中立性</h3>
                <p className="text-gray-600 leading-relaxed">
                  特定メーカーの代理店ではなく、複数のサプライヤーを横断して
                  最適な製品を選定します。顧客の要求仕様に対して、
                  最も合理的な選択肢を提示することを優先します。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-xl mb-4 text-[#1a2e5a]">誠実な対応</h3>
                <p className="text-gray-600 leading-relaxed">
                  できないことは「できない」と正直に伝えます。
                  無理な納期や仕様を引き受けて後で問題になるより、
                  最初から現実的な提案をすることが、結果的に信頼に繋がります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-12">会社概要</h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">商号</div>
                <div className="col-span-3">株式会社清水商會 / Shimizu Shokai Co., Ltd.</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">創業</div>
                <div className="col-span-3">1950年4月1日（昭和25年）</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">設立</div>
                <div className="col-span-3">1959年4月25日（昭和34年）</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">資本金</div>
                <div className="col-span-3">10,000,000円</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">代表者</div>
                <div className="col-span-3">代表取締役 清水 正太</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">従業員数</div>
                <div className="col-span-3">4名（会長: 清水 進、社長: 清水 正太、他社員2名在籍）</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">事業内容</div>
                <div className="col-span-3">
                  ホブカッター等の歯車加工工具の販売<br />
                  新品・中古工作機械の販売<br />
                  機械修理・オーバーホール・改造<br />
                  工場一括整理対応
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">主要取引銀行</div>
                <div className="col-span-3">
                  三井住友銀行 蒲田支店<br />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">加盟団体</div>
                <div className="col-span-3">
                  全日本機械業連合会<br />
                  東京都機械業連合会・城南支部<br />
                  城南機械商協同組合<br />
                  公益社団法人蒲田法人会
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">許認可</div>
                <div className="col-span-3">
                  東京都公安委員会許可<br />
                  古物工具機械商 第302220706952号
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">本社所在地</div>
                <div className="col-span-3">
                  〒146-0093<br />
                  東京都大田区矢口3-1-20<br />
                  TEL: 03-5732-2800<br />
                  FAX: 03-5732-2891
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Activities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-8">営業品目 ■工作機械関係■</h2>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="mb-8">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">新品・中古工作機械の販売</h3>
                <p className="text-gray-600 leading-relaxed">
                  新品工作機械から中古工作機械まで、1台から工場一括整理まで、幅広く対応させていただいております。
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-200">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">機械修理・オーバーホール・改造</h3>
                <p className="text-gray-600 leading-relaxed">
                  機械修理、オーバーホール（部分含む）、改造等に対応いたします。
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg mb-6 text-[#1a2e5a] font-semibold">☆取扱い品目☆</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="mb-3 text-[#1a2e5a] font-semibold">ホブ各種</h4>
                    <p className="text-gray-600 text-sm">
                      標準ホブ、ウォームホブ、荒切り用ホブ、ミクロンホブ
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-[#1a2e5a] font-semibold">ピニオンカッター各種</h4>
                    <p className="text-gray-600 text-sm">
                      柄付ピニオンカッター等
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-[#1a2e5a] font-semibold">ブローチ各種</h4>
                    <p className="text-gray-600 text-sm">
                      キーブローチ、サーフェスブローチ等
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-[#1a2e5a] font-semibold">カッター各種</h4>
                    <p className="text-gray-600 text-sm">
                      ラックカッター、キーシータカッター、ウォームカッター、マスターギヤ等
                    </p>
                  </div>

                  <div className="col-span-full">
                    <h4 className="mb-3 text-[#1a2e5a] font-semibold">その他</h4>
                    <p className="text-gray-600 text-sm">
                      特殊工具製作
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-lg mb-4 text-[#1a2e5a] font-semibold">☆取扱いメーカー☆（順不同）</h3>
                <p className="text-gray-600">
                  アヅミ、伊澤技術研究所、小笠原プレシジョンラボラトリー、不二越、大和精密工具、ＤＴＲ（韓国）
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}