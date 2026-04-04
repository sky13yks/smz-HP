import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ErrorBoundary } from "./ErrorBoundary";
import { Toaster } from "sonner";

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
