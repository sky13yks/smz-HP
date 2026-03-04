import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background bg-grid-white">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              GET IN <br />
              <span className="text-gradient-blue uppercase">Touch</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              技術的なご相談、製品のお問合せなど、お気軽にご連絡ください。<br />
              専門スタッフが24時間以内にご回答いたします。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8 animate-fade-in">
              <div className="glass-panel p-10 rounded-[2rem]">
                <h2 className="text-2xl font-black mb-10 tracking-widest uppercase">Contact Info</h2>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-400">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Domestic</p>
                      <p className="text-xl font-bold font-mono">03-5732-2800</p>
                      <p className="text-xs text-white/50 mt-1">平日 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Inquiry Email</p>
                      <p className="text-sm font-bold font-mono text-white/80 transition-colors hover:text-blue-400 cursor-pointer">team@smz-shokai.com</p>
                      <p className="text-xs text-white/50 mt-1">24時間受付</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 glass-panel rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Headquarters</p>
                      <p className="text-sm font-bold text-white/80 leading-relaxed">
                        〒146-0093<br />
                        東京都大田区矢口3-1-20
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3">Technical Consultation</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    図面がある場合は、メールへの添付を推奨いたします。PDF, DXF, STP等、主要な設計形式に対応しております。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel p-10 md:p-16 rounded-[3rem] animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Category <span className="text-blue-500">*</span></label>
                      <select
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-background">選択してください</option>
                        <option value="quotation" className="bg-background">製品のお見積り</option>
                        <option value="technical" className="bg-background">技術的なご相談</option>
                        <option value="spec" className="bg-background">仕様のお問合せ</option>
                        <option value="other" className="bg-background">その他</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Company Name <span className="text-blue-500">*</span></label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Full Name <span className="text-blue-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email <span className="text-blue-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Message Content <span className="text-blue-500">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="要求精度、予算感、納期など詳細にご記入ください。"
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group relative w-full md:w-auto px-16 py-5 bg-blue-600 rounded-full font-black tracking-[0.2em] text-sm uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 flex items-center justify-center gap-4"
                    >
                      Process & Send <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                    <p className="text-[10px] text-white/30 font-bold mt-6 tracking-widest leading-relaxed uppercase">
                      ※ ご入力いただいた情報は暗号化され、安全に送信されます。<br />
                      ※ プライバシーポリシーに同意の上、送信ボタンを押してください。
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

