import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { History } from "./pages/History";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Access } from "./pages/Access";
import { FAQ } from "./pages/FAQ";
import { TechSolutions } from "./pages/TechSolutions";
import { MatrixBrand } from "./pages/MatrixBrand";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";
import { RootLayout } from "./components/RootLayout";

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
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);
