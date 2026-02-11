import { Link, useLocation } from "react-router";
import logoImg from "figma:asset/6dde8142b65b0777b3c4f6e4a35b3a7580661ee6.png";

export function Header() {
  const location = useLocation();
  
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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="SHIMIZU SHOKAI" className="h-10" />
        </Link>
        
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
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
