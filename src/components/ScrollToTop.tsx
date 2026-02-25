// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // パス(pathname)が変わるたびに、ウィンドウの座標(0, 0)へスクロールする
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // 画面には何も表示しない
}
