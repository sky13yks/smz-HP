import { Link, useLocation } from "react-router";
import { useState } from "react";
import logoImg from "../assets/smz-logo_200_200_Gemini_Generated_Image_rvns2brvns2brvns.png";
import { Menu, X } from "lucide-react";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/services", label: "事業内容" },
    { path: "/company", label: "会社情報" },
    { path: "/history", label: "沿革" },
    { path: "/contact", label: "お問合せ" },
    { path: "/access", label: "アクセス" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="SHIMIZU SHOKAI" className="h-20" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors hover:text-[#2563eb] ${
                location.pathname === item.path
                  ? "text-[#1a2e5a]"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-[#1a2e5a] font-medium"
                    : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
