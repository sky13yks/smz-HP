import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
// ↓↓↓ 作成した ScrollToTop をインポート（同じフォルダにある場合）
import ScrollToTop from "./ScrollToTop"; 

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ↓↓↓ ここに追加します（画面には何も表示されませんが機能します） ↓↓↓ */}
      <ScrollToTop />

      <Header />
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
