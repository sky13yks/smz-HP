import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import logoImg from "../assets/logo_transparent.png";
import { Menu, X, ExternalLink } from "lucide-react";

const INVENTORY_URL = "https://www.jp.usedmachinery.bz/members/general_list_id/356";

const navItems = [
  { path: "/", matchPath: "/", label: "ホーム" },
  { path: "/services", matchPath: "/services", label: "事業内容" },
  { path: "/company", matchPath: "/company", label: "会社情報" },
  { path: "/matrix", matchPath: "/matrix", label: "Matrix" },
  { path: "/tech?tab=docs", matchPath: "/tech", label: "技術資料" },
  { path: "/history", matchPath: "/history", label: "沿革" },
  { path: "/contact", matchPath: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // M-7: Escapeキーでメニューを閉じる
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // M-3: パス先頭一致でアクティブ判定（/tech/articles/:id でも「技術資料」がアクティブ）
  function isActive(matchPath: string): boolean {
    if (matchPath === '/') return location.pathname === '/';
    return location.pathname.startsWith(matchPath);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="container mx-auto">
        <div className="bg-card/60 backdrop-blur-xl border border-border/30 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] pointer-events-auto px-6 py-2 flex items-center justify-between transition-all duration-500">
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="株式会社清水商會"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`py-2 text-sm tracking-wide transition-colors duration-300 ${
                  isActive(item.matchPath)
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
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
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
        <div className="md:hidden absolute top-24 left-4 right-4 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-sm p-6 pointer-events-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm tracking-wide py-3 border-b border-border/50 transition-colors ${
                  isActive(item.matchPath) ? "text-foreground" : "text-muted-foreground"
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
