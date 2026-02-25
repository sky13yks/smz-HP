import { Settings, Cog, Network, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Services() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      title: "材料調達",
      highlighted: false,
      description: "歯車製作の第一段階。設計仕様に応じた適切な材料の調達・選定を行います。",
      details: [
        "顧客の要求仕様に応じた材質の選定",
        "鋼材のグレード・組成の最適化",
        "納期・コストの兼ね合いを考慮した調達",
        "材料の品質検査・成績書の確認"
      ]
    },
    {
      id: 2,
      title: "荒加工",
      highlighted: true,
      relation: "当社が工作機械販売・修理に対応",
      description: "材料から歯形以外を削り取り、歯車の基本形状を作成します。ホブ盤やシェーバーなど高精度機械が必須です。",
      details: [
        "工作機械による段階的な削り取り",
        "外径・内径・厚さの粗加工",
        "歯車基準面の設定と加工",
        "当社では新品・中古工作機械の販売、修理・オーバーホールにより、最適な機械環境を実現"
      ]
    },
    {
      id: 3,
      title: "歯切り加工",
      highlighted: true,
      relation: "当社が歯車加工工具の受注生産に対応",
      description: "ホブカッターを用いて歯形を切削します。工具の精度が直結して製品精度に影響するため、工具選定が最も重要な工程です。",
      details: [
        "ホブカッターの仕様決定（モジュール・圧力角・ねじれ角）",
        "被削材に応じた最適な材質・コーティング選定",
        "切削条件（送り・切込み・回転数）の最適化",
        "工具寿命と加工精度のバランス検討",
        "当社では、加工条件を理解した上での工具受注生産で、高精度な歯形加工を実現"
      ]
    },
    {
      id: 4,
      title: "熱処理",
      highlighted: false,
      description: "歯車の硬度・耐久性を確保するため、焼入れ・焼戻しなどの熱処理を実施します。",
      details: [
        "焼入れによる硬度向上（HRC 50～65程度）",
        "焼戻しによる内部応力の緩和",
        "浸炭焼入れ・窒化処理など特殊処理の選定",
        "熱処理による寸法変化の予測と管理"
      ]
    },
    {
      id: 5,
      title: "歯車研削",
      highlighted: true,
      relation: "当社が加工受託・ネットワークで対応",
      description: "熱処理後の歯面を研削し、精度を向上させます。高精度が要求される場合の重要な工程で、全国の信頼できる加工パートナーと連携します。",
      details: [
        "熱処理後の歪み・寸法変化を補正",
        "歯面粗さの改善（Ra 0.4～0.8μm程度に研削可能）",
        "歯形精度の向上（JIS 5級～6級程度へ改善）",
        "当社では全国の信頼できる歯車加工メーカーとのネットワークを活用し、最適な研削加工を実現"
      ]
    },
    {
      id: 6,
      title: "検査・納入",
      highlighted: true,
      relation: "当社が試験・検査機械の販売に対応",
      description: "完成した歯車の寸法・精度を検査し、顧客要求を満たす品質で納入します。",
      details: [
        "歯形精度の計測（スパン測定・ピッチ誤差）",
        "表面粗さ・硬度の確認",
        "試験機による動作・耐久性検証",
        "成績書・検査報告書の作成・納品",
        "当社では検査・試験機械の販売により、顧客の品質管理体制の構築をサポート"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            事業内容
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            歯車製作の全工程を理解する技術商社として。<br />
            材料調達から納入まで、各段階でお客様をサポートします。
          </p>
        </div>
      </section>

      {/* Three Key Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-4 text-center">当社が深く関与する3つの領域</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              歯車製作の全工程を理解しながら、特に以下の3つの領域で<br />
              技術的な価値を提供しています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Area 1 */}
              <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-[#2563eb]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#1a2e5a]">
                  歯切り加工工具<br />の受注生産
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  ホブカッター、ピニオンカッター等、歯車加工用工具を受注生産。加工条件に応じた仕様検討も行います。
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ モジュール・圧力角の最適化</p>
                  <p>✓ 被削材に応じた材質選定</p>
                  <p>✓ 加工条件の提案</p>
                  <p>✓ 工具寿命と精度のバランス検討</p>
                </div>
              </div>

              {/* Area 2 */}
              <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Cog className="w-8 h-8 text-[#2563eb]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#1a2e5a]">
                  工作機械の<br />販売・技術対応
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  新品・中古を問わず歯車加工機を販売。機械の稼働を長期的に支援します。
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ 精度測定・整備</p>
                  <p>✓ 修理・オーバーホール</p>
                  <p>✓ 精度調整・改造対応</p>
                  <p>✓ 納入後のサポート</p>
                </div>
              </div>

              {/* Area 3 */}
              <div className="border-t-4 border-[#2563eb] bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Network className="w-6 h-6 text-[#2563eb]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#1a2e5a]">
                  歯車加工の受託<br />ネットワーク活用
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  全国の歯車メーカーとのネットワークで、最適な加工先を選定します。
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ 高精度加工対応</p>
                  <p>✓ 大物～小物対応</p>
                  <p>✓ 特殊材対応</p>
                  <p>✓ 納期・コスト最適化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gear Manufacturing Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-[#1a2e5a] mb-4 text-center">歯車製作フロー</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              当社が関与する各領域の作成フローについて、詳しくはこちらをご確認ください。<br />
              各工程をクリックして詳細をご覧いただけます。
            </p>

            {/* Flow Steps */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`rounded-lg border transition-all ${
                    step.highlighted
                      ? "border-[#2563eb] bg-blue-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() =>
                      setExpandedStep(
                        expandedStep === step.id ? null : step.id
                      )
                    }
                    className="w-full p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
                  >
                    <div className="flex items-center gap-4 text-left flex-1">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
                        step.highlighted
                          ? "bg-[#2563eb] text-white"
                          : "bg-gray-200 text-[#1a2e5a]"
                      }`}>
                        {step.id}
                      </div>
                      <div>
                        <h3 className="text-xl text-[#1a2e5a] font-semibold">
                          {step.title}
                        </h3>
                        {step.highlighted && step.relation && (
                          <p className="text-sm text-[#2563eb] mt-1">
                            ★ {step.relation}
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-[#1a2e5a] transition-transform ${
                        expandedStep === step.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Details */}
                  {expandedStep === step.id && (
                    <div className="px-6 pb-6 border-t border-opacity-20 border-gray-300">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-[#1a2e5a] mb-4">
                          重要なポイント:
                        </h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#2563eb] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
