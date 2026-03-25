import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const initialFormData = {
  category: "",
  company: "",
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  useDocumentTitle('お問い合わせ');
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("お問合せを受け付けました。24時間以内に担当者よりご連絡いたします。");
    setFormData(initialFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass = "w-full bg-secondary border border-border rounded-md px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-8 leading-none">
              GET IN <br />
              <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
              <div className="surface p-10 rounded-lg">
                <h2 className="font-mono text-xs font-medium mb-10 tracking-[0.15em] uppercase text-muted-foreground">Contact Info</h2>

                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Domestic</p>
                      <p className="text-xl font-medium font-mono">03-5732-2800</p>
                      <p className="text-xs text-muted-foreground mt-1">平日 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Inquiry Email</p>
                      <p className="text-sm font-medium font-mono text-foreground/80 transition-colors hover:text-primary cursor-pointer">team@smz-shokai.com</p>
                      <p className="text-xs text-muted-foreground mt-1">24時間受付</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Headquarters</p>
                      <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                        〒146-0093<br />
                        東京都大田区矢口3-1-20
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-secondary rounded-lg border border-border">
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-primary mb-3">Technical Consultation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    図面がある場合は、メールへの添付を推奨いたします。PDF, DXF, STP等、主要な設計形式に対応しております。
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="surface p-10 md:p-16 rounded-lg animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="category" className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground ml-1">Category <span className="text-primary">*</span></label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" className="bg-background">選択してください</option>
                        <option value="quotation" className="bg-background">製品のお見積り</option>
                        <option value="technical" className="bg-background">技術的なご相談</option>
                        <option value="spec" className="bg-background">仕様のお問合せ</option>
                        <option value="other" className="bg-background">その他</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground ml-1">Company Name <span className="text-primary">*</span></label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground ml-1">Full Name <span className="text-primary">*</span></label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground ml-1">Email <span className="text-primary">*</span></label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground ml-1">Message Content <span className="text-primary">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="要求精度、予算感、納期など詳細にご記入ください。"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="group w-full md:w-auto px-16 py-5 bg-primary text-primary-foreground rounded-md font-medium tracking-wider text-sm uppercase transition-all duration-500 flex items-center justify-center gap-4"
                    >
                      Process & Send <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                    <p className="text-xs text-muted-foreground font-normal mt-6 tracking-wider leading-relaxed">
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
