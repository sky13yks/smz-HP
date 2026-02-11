import { Link } from "react-router";
import { GearAnimation } from "../components/GearAnimation";
import { ArrowRight, Settings, Cog, Network } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Background Gear Animations */}
        <div className="absolute top-20 right-[10%] opacity-40">
          <GearAnimation size={300} speed={30} />
        </div>
        <div className="absolute bottom-20 left-[8%] opacity-30">
          <GearAnimation size={250} speed={25} reverse />
        </div>
        <div className="absolute top-[50%] right-[25%] opacity-20">
          <GearAnimation size={180} speed={35} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl mb-8 text-[#1a2e5a] leading-tight">
              Gear Manufacturing,<br />
              Fully Understood.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              工具・機械・加工。<br />
              歯車製造の全工程を理解する技術商社として、<br />
              現場の課題に、的確な解を提示します。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded hover:bg-[#1d4ed8] transition-colors"
              >
                事業内容を見る
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#1a2e5a] text-[#1a2e5a] px-8 py-4 rounded hover:bg-[#1a2e5a] hover:text-white transition-colors"
              >
                お問合せ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#1a2e5a] mb-4">
              歯車加工を、構造から理解する
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              商社に求められるのは、単なる手配業務ではなく、<br />
              技術的な理解に基づいた提案力です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl mb-4 text-[#1a2e5a]">工具を理解する</h3>
              <p className="text-gray-600 leading-relaxed">
                ホブカッター、ピニオンカッター、ブローチ。
                それぞれの工具が持つ特性と、加工条件への影響を理解し、
                最適な仕様を提案します。
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Cog className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl mb-4 text-[#1a2e5a]">機械を支える</h3>
              <p className="text-gray-600 leading-relaxed">
                歯車加工機の内部構造とメカニズムを把握。
                新品・中古の販売だけでなく、修理・整備対応を通じて、
                機械の長期稼働を支援します。
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-lg hover:border-[#2563eb] transition-colors">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-[#2563eb]" />
              </div>
              <h3 className="text-xl mb-4 text-[#1a2e5a]">加工を繋ぐ</h3>
              <p className="text-gray-600 leading-relaxed">
                全国の歯車メーカーとのネットワークを活用し、
                各社の設備・技術力を把握した上で、
                最適な加工先を選定します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#1a2e5a] mb-12 text-center">
              工具 → 機械 → 加工、すべてに対応
            </h2>

            <div className="space-y-6">
              <Link
                to="/services"
                className="block p-8 bg-white border-l-4 border-[#2563eb] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-2 text-[#1a2e5a]">歯車加工工具の受注生産</h3>
                    <p className="text-gray-600 leading-relaxed">
                      ホブカッター、ピニオンカッター、ブローチ等を受注生産。
                      加工条件・材質・精度要求を理解した上で、工具仕様を提案します。
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2563eb] flex-shrink-0 ml-4" />
                </div>
              </Link>

              <Link
                to="/services"
                className="block p-8 bg-white border-l-4 border-[#2563eb] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-2 text-[#1a2e5a]">工作機械の販売・技術対応</h3>
                    <p className="text-gray-600 leading-relaxed">
                      新品・中古を問わず歯車加工機を販売。
                      機械の内部構造を理解し、修理・整備・精度調整まで対応します。
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2563eb] flex-shrink-0 ml-4" />
                </div>
              </Link>

              <Link
                to="/services"
                className="block p-8 bg-white border-l-4 border-[#2563eb] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-2 text-[#1a2e5a]">加工の受託・ネットワーク活用</h3>
                    <p className="text-gray-600 leading-relaxed">
                      全国の歯車メーカーとのネットワークで、
                      保有設備・技術力を把握した上で最適な加工先を選定し、製造依頼に対応します。
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#2563eb] flex-shrink-0 ml-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Understanding */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl text-[#1a2e5a] mb-6">
                技術者と、同じ言葉で会話する
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                モジュール、圧力角、バックラッシュ、インボリュート曲線。<br />
                技術的な用語を正確に理解し、現場の課題に応えられる体制を整えています。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">こんな相談に対応します</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>• この図面を加工するには、どの工具が最適か？</li>
                  <li>• ホブ盤の精度が出ない。調整できるか？</li>
                  <li>• 小ロットだが、加工してくれる先はあるか？</li>
                  <li>• 特殊なモジュールのカッターは製作可能か？</li>
                  <li>• 中古機械の精度はどの程度か？</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl mb-4 text-[#1a2e5a]">技術的対話を重視</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  カタログを渡すだけの対応はしません。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  図面を読み、加工条件を理解し、
                  精度要求と納期のバランスを考慮した提案を行います。
                  技術者が安心して相談できる存在であることを、何より大切にしています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a2e5a] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            歯車加工のご相談、お気軽にどうぞ
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            工具・機械・加工、どの段階からでも対応します。<br />
            仕様が固まっていない段階からの相談も歓迎です。
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