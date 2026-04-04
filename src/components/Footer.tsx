import { Link } from "react-router-dom";
import logoImg from "../assets/logo_transparent.webp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img
              src={logoImg}
              alt="株式会社清水商會"
              className="h-16 md:h-20 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              精密機械・歯車分野における<br />
              技術商社として、最適解を提供します。
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-foreground">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">ホーム</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">事業内容</Link></li>
              <li><Link to="/company" className="text-muted-foreground hover:text-foreground transition-colors">会社情報</Link></li>
              <li><Link to="/history" className="text-muted-foreground hover:text-foreground transition-colors">沿革</Link></li>
              <li><Link to="/makers" className="text-muted-foreground hover:text-foreground transition-colors">取扱メーカー</Link></li>
              <li><Link to="/cases" className="text-muted-foreground hover:text-foreground transition-colors">導入事例</Link></li>
              <li><Link to="/tech?tab=docs" className="text-muted-foreground hover:text-foreground transition-colors">ニュース & コラム</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-foreground">お問合せ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">お問合せフォーム</Link></li>
              <li><Link to="/access" className="text-muted-foreground hover:text-foreground transition-colors">アクセス</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">よくあるご質問(FAQ)</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">プライバシーポリシー</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-foreground">企業情報</h3>
            <div className="text-sm space-y-2 text-muted-foreground">
              <p>株式会社 清水商會</p>
              <p>〒146-0093<br />東京都大田区矢口3-1-20</p>
              <p>TEL: 03-5732-2800</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center text-sm border-t border-border text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shimizu Shokai Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
