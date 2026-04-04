import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";

// 全ページを lazy loading（初回ロードのバンドルサイズを大幅削減）
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Company = lazy(() => import("./pages/Company").then(m => ({ default: m.Company })));
const History = lazy(() => import("./pages/History").then(m => ({ default: m.History })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const Access = lazy(() => import("./pages/Access").then(m => ({ default: m.Access })));
const FAQ = lazy(() => import("./pages/FAQ").then(m => ({ default: m.FAQ })));
const TechSolutions = lazy(() => import("./pages/TechSolutions").then(m => ({ default: m.TechSolutions })));
const MatrixBrand = lazy(() => import("./pages/MatrixBrand").then(m => ({ default: m.MatrixBrand })));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail").then(m => ({ default: m.ArticleDetail })));
const Makers = lazy(() => import("./pages/Makers").then(m => ({ default: m.Makers })));
const Cases = lazy(() => import("./pages/Cases").then(m => ({ default: m.Cases })));
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "company", Component: Company },
      { path: "history", Component: History },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "access", Component: Access },
      { path: "faq", Component: FAQ },
      { path: "tech", Component: TechSolutions },
      { path: "tech/articles/:id", Component: ArticleDetail },
      { path: "matrix", Component: MatrixBrand },
      { path: "makers", Component: Makers },
      { path: "cases", Component: Cases },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
