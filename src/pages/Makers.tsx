import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { ScrollRevealSection } from '@/components/ScrollRevealSection';
import { makerCategories } from '@/constants/makers';

export function Makers() {
  useDocumentTitle('取扱メーカー');
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 leading-none">
              取扱メーカー
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              清水商會が取り扱う主要メーカーをご紹介します。<br />
              以下に記載のないメーカーにも対応可能です。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {makerCategories.map((category) => (
        <section key={category.id} className="py-16 even:bg-secondary">
          <ScrollRevealSection>
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium tracking-wider rounded-full">
                  {category.subtitle}
                </span>
                <h2 className="text-2xl font-medium">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.makers.map((maker) => (
                  <div
                    key={maker.name}
                    className="bg-card border border-border p-5 rounded-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <p className="text-sm font-medium text-foreground mb-1">{maker.name}</p>
                    {maker.description && (
                      <p className="text-xs text-muted-foreground">{maker.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollRevealSection>
        </section>
      ))}

      {/* Note + CTA */}
      <section className="py-20">
        <ScrollRevealSection>
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="bg-secondary border border-border rounded-xl p-10">
              <h3 className="text-xl font-medium mb-4">上記以外のメーカーも対応可能です</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                清水商會は特定メーカーに縛られない中立的な立場で、<br className="hidden md:inline" />
                お客様の加工条件に最適な機械・工具をご提案いたします。<br className="hidden md:inline" />
                掲載のないメーカーについてもお気軽にお問い合わせください。
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
