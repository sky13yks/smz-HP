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

  const isMatrix = location.pathname === "/matrix";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="container mx-auto">
        <div className="glass-panel pointer-events-auto rounded-2xl px-6 py-2 flex items-center justify-between transition-all duration-500">
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="SHIMIZU SHOKAI"
              className="h-14 md:h-16 w-auto object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 group ${location.pathname === item.path
                  ? "text-white"
                  : "text-white/50 hover:text-white"
                  }`}
              >
                {item.label}
                {/* Precise Indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full transition-all duration-500 bg-gradient-to-r ${item.path === "/matrix" ? "from-green-400 to-green-600" : "from-blue-400 to-blue-600"
                    } ${location.pathname === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
                />
              </Link>
            ))}
            <a
              href={INVENTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-[0.15em] uppercase border border-white/30 rounded-lg text-white/70 hover:text-white hover:border-white/60 transition-all duration-300"
            >
              在庫一覧
              <ExternalLink className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-widest font-bold py-3 border-b border-white/5 transition-colors ${location.pathname === item.path ? "text-white" : "text-white/50"
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
              className="flex items-center gap-2 text-sm tracking-widest font-bold py-3 text-white/50 hover:text-white transition-colors"
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

