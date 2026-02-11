import { MapPin, Train, Car, Clock } from "lucide-react";

export function Access() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            アクセス
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            本社所在地とアクセス方法のご案内です。<br />
            ご来社の際は、事前にご連絡いただけますようお願いいたします。
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div>
                <h2 className="text-2xl text-[#1a2e5a] mb-6">所在地</h2>
                
                {/* Map placeholder - In a real application, you would use Google Maps API or similar */}
                <div className="aspect-[4/3] bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Google Mapsで表示</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="mb-4 text-[#1a2e5a]">株式会社 清水商会</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>〒106-0032</p>
                    <p>東京都港区六本木2-14-1</p>
                    <p className="pt-4">TEL: 03-5555-0199</p>
                    <p>FAX: 03-5555-0200</p>
                    <p className="pt-4 text-sm text-gray-500">
                      営業時間：平日 9:00-18:00<br />
                      定休日：土日祝日・年末年始
                    </p>
                  </div>
                </div>
              </div>

              {/* Access Information */}
              <div>
                <h2 className="text-2xl text-[#1a2e5a] mb-6">交通アクセス</h2>
                
                <div className="space-y-6">
                  {/* Train Access */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Train className="w-6 h-6 text-[#2563eb]" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-[#1a2e5a]">電車でお越しの方</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4 ml-16">
                      <div>
                        <h4 className="mb-2 text-[#1a2e5a]">東京メトロ 南北線</h4>
                        <p className="text-gray-600 text-sm">
                          「六本木一丁目駅」3番出口より徒歩5分
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="mb-2 text-[#1a2e5a]">東京メトロ 日比谷線</h4>
                        <p className="text-gray-600 text-sm">
                          「六本木駅」5番出口より徒歩8分
                        </p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-[#1a2e5a]">都営大江戸線</h4>
                        <p className="text-gray-600 text-sm">
                          「六本木駅」5番出口より徒歩8分
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Car Access */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Car className="w-6 h-6 text-[#2563eb]" />
                      </div>
                      <div>
                        <h3 className="text-xl mb-2 text-[#1a2e5a]">お車でお越しの方</h3>
                      </div>
                    </div>
                    
                    <div className="ml-16 space-y-3">
                      <p className="text-gray-600 text-sm">
                        首都高速「飯倉」出口より約5分
                      </p>
                      <p className="text-sm text-gray-500">
                        ※ 専用駐車場はございません。<br />
                        近隣のコインパーキングをご利用ください。
                      </p>
                    </div>
                  </div>

                  {/* Visit Notice */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#2563eb]" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-[#1a2e5a]">ご来社について</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          ご来社の際は、事前にお電話またはメールでご連絡ください。
                          技術者との打ち合わせをご希望の場合は、日程調整をさせていただきます。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="mb-3 text-[#1a2e5a]">受付時間</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  平日 9:00-18:00<br />
                  土日祝日・年末年始は<br />
                  休業とさせていただきます
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="mb-3 text-[#1a2e5a]">技術相談</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  サンプル展示室にて、<br />
                  実物をご覧いただきながらの<br />
                  技術相談も可能です
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="mb-3 text-[#1a2e5a]">オンライン相談</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Web会議システムを使用した<br />
                  オンライン技術相談にも<br />
                  対応しております
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-[#1a2e5a] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl mb-4">お問合せ・ご予約</h2>
              <p className="text-gray-300 mb-6">
                ご来社のご予約、技術相談のお申し込みは、<br />
                お電話またはメールにてお気軽にご連絡ください。
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="tel:03-5555-0199"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1a2e5a] px-6 py-3 rounded hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  03-5555-0199
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded hover:bg-white/10 transition-colors"
                >
                  お問合せフォーム
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
