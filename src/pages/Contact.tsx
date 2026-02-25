import { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    category: "",
    company: "",
    department: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert("お問合せを受け付けました。24時間以内に担当者よりご連絡いたします。");
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl text-[#1a2e5a] mb-6">
            お問合せ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            技術的なご相談、製品のお問合せなど、お気軽にご連絡ください。<br />
            担当者が24時間以内にご回答いたします。
          </p>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl text-[#1a2e5a] mb-8">お問合せ先</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[#1a2e5a]">電話</h3>
                    <p className="text-gray-600">03-5732-2800</p>
                    <p className="text-sm text-gray-500 mt-1">平日 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[#1a2e5a]">メール</h3>
                    <p className="text-gray-600 text-sm break-all">
                      team@smz-shokai.com
                    </p>
                    <p className="text-sm text-gray-500 mt-1">24時間受付</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[#1a2e5a]">営業時間</h3>
                    <p className="text-gray-600">平日 9:00-18:00</p>
                    <p className="text-sm text-gray-500 mt-1">
                      土日祝日・年末年始は<br />休業とさせていただきます
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[#1a2e5a]">所在地</h3>
                    <p className="text-gray-600 text-sm">
                      〒145-0093<br />
                      東京都大田区矢口3-1-20
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="mb-3 text-[#1a2e5a]">技術相談について</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  仕様が確定していない段階からでもご相談可能です。
                  図面がある場合は、フォームからアップロードいただくと、
                  より具体的な提案が可能です。
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl text-[#1a2e5a] mb-8">お問合せフォーム</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="category" className="block mb-2 text-[#1a2e5a]">
                    お問合せ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="quotation">製品のお見積り</option>
                    <option value="technical">技術的なご相談</option>
                    <option value="spec">仕様に関するお問合せ</option>
                    <option value="custom">カスタム設計のご相談</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block mb-2 text-[#1a2e5a]">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="block mb-2 text-[#1a2e5a]">
                      部署名
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block mb-2 text-[#1a2e5a]">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-[#1a2e5a]">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-[#1a2e5a]">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-[#1a2e5a]">
                    件名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="例：平歯車の選定に関するご相談"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[#1a2e5a]">
                    お問合せ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="技術的な要求仕様、図面番号、数量、納期など、できるだけ詳しくご記入ください。"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none"
                  />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="mb-3 text-[#1a2e5a]">図面・資料の送付について</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    図面や技術資料がある場合は、メール（team@smz-shokai.com）に添付してお送りください。
                    対応可能なファイル形式：PDF, DXF, DWG, STEP, IGES（30MBまで）
                  </p>
                  <p className="text-sm text-gray-500">
                    ※ 機密保持契約が必要な場合は、事前にご連絡ください。
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    <a href="#" className="text-[#2563eb] hover:underline">プライバシーポリシー</a>
                    に同意する <span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 bg-[#2563eb] text-white rounded hover:bg-[#1d4ed8] transition-colors"
                  >
                    送信する
                  </button>
                </div>

                <p className="text-sm text-gray-500">
                  ご入力いただいた個人情報は、お問合せへの回答のみに使用し、
                  第三者に開示することはありません。
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
