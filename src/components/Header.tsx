import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo_transparent.png";
import { Menu, X, ExternalLink } from "lucide-react";

const INVENTORY_URL = "https://www.jp.usedmachinery.bz/members/general_list_id/356";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/services", label: "事業内容" },
    { path: "/company", label: "会社情報" },
    { path: "/matrix", label: "Matrix" },
    { path: "/tech?tab=docs", label: "技術資料" },
    { path: "/history", label: "沿革" },
    { path: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="bg-background/95 backdrop-blur-sm border-b border-border px-6 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="SHIMIZU SHOKAI"
              className="logo-outlined h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INVENTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
            >
              在庫一覧
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background border-b border-border p-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide py-3 border-b border-border transition-colors ${
                  location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={INVENTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm tracking-wide py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              在庫一覧
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
