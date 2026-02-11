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
                <div className="col-span-3">株式会社 清水商会 / Shimizu Shokai Co., Ltd.</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">設立</div>
                <div className="col-span-3">1985年12月</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">資本金</div>
                <div className="col-span-3">1億2000万円</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">代表者</div>
                <div className="col-span-3">代表取締役社長 清水 建一</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">従業員数</div>
                <div className="col-span-3">52名（技術者 28名を含む）</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">事業内容</div>
                <div className="col-span-3">
                  歯車加工工具の受注生産<br />
                  歯車加工機の販売・修理・整備<br />
                  歯車加工の受託・ネットワーク活用<br />
                  技術コンサルティング
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gray-200 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">主要取引先</div>
                <div className="col-span-3">
                  歯車製造メーカー<br />
                  産業機械メーカー<br />
                  工作機械ユーザー<br />
                  自動車・建機関連企業
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 pb-6">
                <div className="text-gray-600 mb-2 md:mb-0">本社所在地</div>
                <div className="col-span-3">
                  〒106-0032<br />
                  東京都港区六本木2-14-1<br />
                  TEL: 03-5555-0199<br />
                  FAX: 03-5555-0200
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
            <h2 className="text-3xl text-[#1a2e5a] mb-8">取扱分野</h2>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-6 text-[#1a2e5a]">歯車加工関連の主要取扱品</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-3 text-[#1a2e5a]">歯車加工工具</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• ホブカッター</li>
                    <li>• ピニオンカッター</li>
                    <li>• ブローチ</li>
                    <li>• シングルカッター</li>
                    <li>• キー溝加工用カッター</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[#1a2e5a]">歯車加工機</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• ホブ盤（立形・横形）</li>
                    <li>• シェービング盤</li>
                    <li>• 歯車研削盤</li>
                    <li>• ギヤシェーパー</li>
                    <li>• ブローチ盤</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[#1a2e5a]">歯車製品</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 平歯車・はすば歯車</li>
                    <li>• かさ歯車・ウォームギア</li>
                    <li>• ラック＆ピニオン</li>
                    <li>• 内歯車・スプライン</li>
                    <li>• 特殊歯車（カスタム品）</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-[#1a2e5a]">関連部品</h4>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• 減速機各種</li>
                    <li>• カップリング</li>
                    <li>• ベアリング類</li>
                    <li>• シャフト・軸加工品</li>
                    <li>• 表面処理（熱処理含む）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}