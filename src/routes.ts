import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { History } from "./pages/History";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Access } from "./pages/Access";
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
    ],
  },
]);
