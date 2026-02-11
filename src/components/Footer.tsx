import { Link } from "react-router";
import logoImg from "figma:asset/6dde8142b65b0777b3c4f6e4a35b3a7580661ee6.png";

export function Footer() {
  return (
    <footer className="bg-[#1a2e5a] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img src={logoImg} alt="SHIMIZU SHOKAI" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed">
              精密機械・歯車分野における<br />
              技術商社として、最適解を提供します。
            </p>
          </div>

          <div>
            <h3 className="mb-4">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">ホーム</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">事業内容</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-white transition-colors">会社情報</Link></li>
              <li><Link to="/history" className="text-gray-300 hover:text-white transition-colors">沿革</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">お問合せ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">お問合せフォーム</Link></li>
              <li><Link to="/access" className="text-gray-300 hover:text-white transition-colors">アクセス</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">企業情報</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>株式会社 清水商会</p>
              <p>〒106-0032<br />東京都港区六本木2-14-1</p>
              <p>TEL: 03-5555-0199</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2025 Shimizu Shokai Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
