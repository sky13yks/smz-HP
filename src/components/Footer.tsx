import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo_transparent.png";

export function Footer() {
  const location = useLocation();
  const isMatrix = location.pathname === "/matrix";

  const linkStyle = (isMatrix: boolean) => ({
    color: isMatrix ? '#6a6a8a' : '#d1d5db',
  });

  const linkHoverClass = isMatrix
    ? "hover:!text-[#49a942]"
    : "hover:text-white";

  return (
    <footer
      className="transition-colors duration-500"
      style={{
        backgroundColor: isMatrix ? '#0f0f1e' : '#1a2e5a',
        color: isMatrix ? '#49a942' : '#fff',
        borderTop: isMatrix ? '1px solid rgba(73, 169, 66, 0.2)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img
              src={logoImg}
              alt="SHIMIZU SHOKAI"
              className="logo-outlined h-16 md:h-20 w-auto object-contain mb-4 transition-all duration-500"
            />
            <p className="text-sm leading-relaxed" style={{ color: isMatrix ? '#6a6a8a' : '#d1d5db' }}>
              精密機械・歯車分野における<br />
              技術商社として、最適解を提供します。
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold" style={{ color: isMatrix ? '#49a942' : '#fff' }}>サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>ホーム</Link></li>
              <li><Link to="/services" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>事業内容</Link></li>
              <li><Link to="/company" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>会社情報</Link></li>
              <li><Link to="/history" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>沿革</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold" style={{ color: isMatrix ? '#49a942' : '#fff' }}>お問合せ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>お問合せフォーム</Link></li>
              <li><Link to="/access" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>アクセス</Link></li>
              <li><Link to="/faq" className={`transition-colors ${linkHoverClass}`} style={linkStyle(isMatrix)}>よくあるご質問(FAQ)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold" style={{ color: isMatrix ? '#49a942' : '#fff' }}>企業情報</h3>
            <div className="text-sm space-y-2" style={{ color: isMatrix ? '#6a6a8a' : '#d1d5db' }}>
              <p>株式会社 清水商會</p>
              <p>〒145-0093<br />東京都大田区矢口3-1-20</p>
              <p>TEL: 03-5732-2800</p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-8 text-center text-sm"
          style={{
            borderTop: isMatrix ? '1px solid rgba(73, 169, 66, 0.15)' : '1px solid rgba(255,255,255,0.2)',
            color: isMatrix ? '#3a3a5a' : '#9ca3af',
          }}
        >
          <p>&copy; 2025 Shimizu Shokai Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
