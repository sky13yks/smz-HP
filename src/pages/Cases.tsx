import { Link } from "react-router-dom";
import { FileText, ArrowRight } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';

// 将来的に Notion CMS から取得する導入事例データ型
// interface CaseStudy {
//   id: string;
//   title: string;
//   clientIndustry: string;
//   challenge: string;
//   solution: string;
//   result: string;
//   publishedAt: string;
// }

export function Cases() {
  useDocumentTitle('導入事例');
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-none">
              導入事例
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              お客様の課題解決の実例をご紹介します。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <ScrollRevealSection>
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="bg-card border border-border rounded-xl p-12 md:p-16 text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-medium mb-4">準備中</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                現在、導入事例ページを準備しております。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-10">
                お客様の許可をいただいた事例から順次公開予定です。<br />
                具体的な事例についてお聞きになりたい場合は、お気軽にお問い合わせください。
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-md font-medium tracking-wider text-sm transition-all duration-500"
              >
                お問い合わせする <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollRevealSection>
      </section>
    </div>
  );
}
