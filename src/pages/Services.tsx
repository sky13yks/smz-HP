import { Settings, Cog, Network, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            事業内容
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            歯車加工の全工程を理解する技術商社として。<br />
            工具・機械・加工の3つの柱で、歯車製造の現場を支えます。
          </p>
        </div>
      </section>

      {/* Business Flow Concept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl text-[#1a2e5a] mb-8">歯車加工の流れを、すべて理解する</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              歯車加工は、工具・機械・加工技術の三位一体。<br />
              私たちは、その全てのプロセスに対応することで、<br />
              技術的な相談から実際の製造まで、一貫した支援を提供します。
            </p>

            {/* Flow Diagram */}
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              <div className="flex-1 min-w-[200px] max-w-[240px]">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-[#2563eb]">
                  <div className="text-4xl text-[#2563eb] mb-2">1</div>
                  <h3 className="text-lg text-[#1a2e5a]">工具</h3>
                  <p className="text-sm text-gray-600 mt-2">歯車加工用カッター</p>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-[#2563eb] hidden md:block" />

              <div className="flex-1 min-w-[200px] max-w-[240px]">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-[#2563eb]">
                  <div className="text-4xl text-[#2563eb] mb-2">2</div>
                  <h3 className="text-lg text-[#1a2e5a]">機械</h3>
                  <p className="text-sm text-gray-600 mt-2">歯車加工機</p>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-[#2563eb] hidden md:block" />

              <div className="flex-1 min-w-[200px] max-w-[240px]">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-[#2563eb]">
                  <div className="text-4xl text-[#2563eb] mb-2">3</div>
                  <h3 className="text-lg text-[#1a2e5a]">加工</h3>
                  <p className="text-sm text-gray-600 mt-2">製造ネットワーク</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1 */}
            <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h2 className="text-2xl mb-4 text-[#1a2e5a]">
                歯車加工工具の<br />受注生産
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ホブカッター、ピニオンカッター等、<br />
                歯車加工用工具を受注生産。<br />
                加工条件に応じた仕様検討も対応。
              </p>
              <div className="text-sm text-gray-500">CUTTING TOOLS</div>
            </div>

            {/* Pillar 2 */}
            <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h2 className="text-2xl mb-4 text-[#1a2e5a]">
                工作機械の<br />販売・技術対応
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                新品・中古を問わず歯車加工機を販売。<br />
                修理・整備対応も行い、<br />
                機械の稼働を長期的に支援。
              </p>
              <div className="text-sm text-gray-500">MACHINE TOOLS</div>
            </div>

            {/* Pillar 3 */}
            <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h2 className="text-2xl mb-4 text-[#1a2e5a]">
                加工の受託・<br />ネットワーク活用
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                全国の歯車メーカーとのネットワークで、<br />
                最適な加工先を選定し、<br />
                製造依頼に対応。
              </p>
              <div className="text-sm text-gray-500">MANUFACTURING NETWORK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1 Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-[#2563eb]" />
              </div>
              <div>
                <h2 className="text-3xl text-[#1a2e5a] mb-4">歯車加工工具の受注生産</h2>
                <p className="text-gray-600 leading-relaxed">
                  単なる工具手配ではなく、加工条件・材質・精度要求を理解した上で、<br />
                  最適な工具仕様を提案し、受注生産で対応します。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">対応工具カテゴリー</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">ホブカッター</span>
                      <p className="text-sm text-gray-500">平歯車・はすば歯車加工用</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">ピニオンカッター</span>
                      <p className="text-sm text-gray-500">内歯車加工用</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">ブローチ</span>
                      <p className="text-sm text-gray-500">内歯車・スプライン加工用</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">シングルカッター</span>
                      <p className="text-sm text-gray-500">単品加工・修正加工用</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">キー溝加工用カッター</span>
                      <p className="text-sm text-gray-500">キーウェイ・スロット加工用</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">仕様検討への対応</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>モジュール・圧力角・ねじれ角の最適化</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>被削材に応じた材質・コーティング選定</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>加工条件（送り・切込み・回転数）の提案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>工具寿命・加工精度のバランス検討</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>再研削対応可否の判断</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-[#2563eb]">
              <h3 className="text-xl mb-4 text-[#1a2e5a]">受注生産の流れ</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2563eb]">1</span>
                  </div>
                  <p className="text-sm text-gray-600">仕様ヒアリング<br />図面確認</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2563eb]">2</span>
                  </div>
                  <p className="text-sm text-gray-600">工具仕様の<br />提案・見積</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2563eb]">3</span>
                  </div>
                  <p className="text-sm text-gray-600">メーカーへ<br />製作依頼</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2563eb]">4</span>
                  </div>
                  <p className="text-sm text-gray-600">検査・<br />精度確認</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[#2563eb]">5</span>
                  </div>
                  <p className="text-sm text-gray-600">納品・<br />使用結果確認</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2 Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Cog className="w-6 h-6 text-[#2563eb]" />
              </div>
              <div>
                <h2 className="text-3xl text-[#1a2e5a] mb-4">工作機械の販売・技術対応</h2>
                <p className="text-gray-600 leading-relaxed">
                  新品・中古を問わず歯車加工機を販売。<br />
                  機械の内部構造と加工メカニズムを理解した上で、修理・整備対応も行います。
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#2563eb]">
                <h3 className="text-xl mb-3 text-[#1a2e5a]">取扱機械カテゴリー</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <ul className="space-y-2">
                    <li>• ホブ盤（立形・横形）</li>
                    <li>• シェービング盤</li>
                    <li>• 歯車研削盤</li>
                    <li>• ギヤシェーパー</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• ブローチ盤</li>
                    <li>• ラック加工機</li>
                    <li>• ベベルギヤ加工機</li>
                    <li>• CNC歯切り盤</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#2563eb]">
                <h3 className="text-xl mb-3 text-[#1a2e5a]">技術対応の範囲</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  販売して終わりではなく、機械の稼働を長期的に支援します。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="mb-2 text-[#1a2e5a]">修理・整備</h4>
                    <p className="text-sm text-gray-600">機械構造を理解した上での部品交換・調整対応</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="mb-2 text-[#1a2e5a]">精度調整</h4>
                    <p className="text-sm text-gray-600">バックラッシュ・インデックス精度の再調整</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="mb-2 text-[#1a2e5a]">改造対応</h4>
                    <p className="text-sm text-gray-600">制御装置の更新・機能追加の検討</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-[#2563eb]">
                <h3 className="text-xl mb-3 text-[#1a2e5a]">中古機械の取り扱い</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  精度確認・整備を行った上で販売。機械の状態を正確に評価できることが強みです。
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>動作確認・精度測定を実施</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>必要に応じてオーバーホール対応</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>納入後の調整・サポート</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3 Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Network className="w-6 h-6 text-[#2563eb]" />
              </div>
              <div>
                <h2 className="text-3xl text-[#1a2e5a] mb-4">加工の受託・ネットワーク活用</h2>
                <p className="text-gray-600 leading-relaxed">
                  全国の歯車メーカーとのネットワークを活かし��<br />
                  保有設備・技術力を把握した上で、最適な加工先を選定します。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">ネットワークの強み</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>全国の歯車メーカーとの長期的な関係</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>各社の保有工具・設備を把握</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>加工精度・得意分野を理解した振り分け</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <span>複数社の連携による複合対応</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">対応範囲</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">大物歯車加工</span>
                      <p className="text-sm text-gray-500">φ2000mm超の大型歯車対応可能先を選定</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">小物・量産対応</span>
                      <p className="text-sm text-gray-500">小モジュール・多数個取り対応</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">高精度加工</span>
                      <p className="text-sm text-gray-500">JIS 0級相当の精密加工対応</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a2e5a]">特殊材対応</span>
                      <p className="text-sm text-gray-500">ステンレス・難削材の加工実績あり</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-[#2563eb]">
              <h3 className="text-xl mb-4 text-[#1a2e5a]">加工受託の流れ</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#2563eb]">1</div>
                  <div>
                    <h4 className="text-[#1a2e5a] mb-1">仕様・図面の確認</h4>
                    <p className="text-sm text-gray-600">モジュール・精度・数量・納期を把握</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#2563eb]">2</div>
                  <div>
                    <h4 className="text-[#1a2e5a] mb-1">最適な加工先の選定</h4>
                    <p className="text-sm text-gray-600">保有設備・工具・稼働状況を考慮して振り分け</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#2563eb]">3</div>
                  <div>
                    <h4 className="text-[#1a2e5a] mb-1">加工依頼・進捗管理</h4>
                    <p className="text-sm text-gray-600">技術的な調整も含めて対応</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#2563eb]">4</div>
                  <div>
                    <h4 className="text-[#1a2e5a] mb-1">検査・品質確認</h4>
                    <p className="text-sm text-gray-600">精度測定結果の確認</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#2563eb]">5</div>
                  <div>
                    <h4 className="text-[#1a2e5a] mb-1">納品・フィードバック</h4>
                    <p className="text-sm text-gray-600">使用結果を次回の選定に活用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl text-[#1a2e5a] mb-8">
              3つの事業で、歯車加工の全体を支える
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              工具の選定から、機械の整備、実際の加工まで。<br />
              全てのプロセスを理解しているからこそ、<br />
              技術的な相談に対して的確な回答ができます。
            </p>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-6 text-[#1a2e5a]">こんな相談にも対応できます</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm text-gray-600">
                <div className="bg-gray-50 p-4 rounded">
                  「この図面を加工するには、どの工具が最適か？」
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  「中古のホブ盤を探しているが、精度は大丈夫か？」
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  「自社で加工したいが、工具の手配も相談できるか？」
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  「数量が少ないが、加工してくれる先はあるか？」
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2e5a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6">歯車加工に関するご相談、お気軽にどうぞ</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            工具・機械・加工、どの段階からでも対応します。<br />
            まずは技術的な相談からでも構いません。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1a2e5a] px-8 py-4 rounded hover:bg-gray-100 transition-colors"
          >
            お問合せフォームへ
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}