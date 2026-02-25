import { Link } from "react-router";
import logoImg from "../assets/smz-logo_200_200_Gemini_Generated_Image_rvns2brvns2brvns.png";

export function Footer() {
  return (
    <footer className="bg-[#1a2e5a] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <img src={logoImg} alt="SHIMIZU SHOKAI" className="h-16 w-auto mb-4" />
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
              <p>株式会社 清水商會</p>
              <p>〒145-0093<br />東京都大田区矢口3-1-20</p>
              <p>TEL: 03-5732-2800</p>
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
