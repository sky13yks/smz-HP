import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ErrorBoundary } from "./ErrorBoundary";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <svg style={{ display: 'none' }} aria-hidden="true">
        <defs>
          <filter id="logo-sharp-alpha">
            <feComponentTransfer>
              <feFuncA type="linear" slope="12" intercept="-5" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-[72px]">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
