import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App';
import Home from "./Home/Home";
import NotFound from "./Shared/Error";
import ProductShow from "./Component/Product/ProductShow";
import ProductCards from "./Component/Product/ProductCrad";
import DashboardPage from "./Component/admin/DashboardPage";
import UsersPage from "./Component/admin/UsersPage";
import AnalyticsPage from "./Component/admin/AnalyticsPage";
import NotificationsPage from "./Component/admin/NotificationsPage";
import SettingsPage from "./Component/admin/SettingsPage";
import StartCard from "./Component/admin/StatCard"
import ProductManage from "./Component/admin/ProductManage"
import ProductDetailsPage from "./Component/productDetiles/ProductDetailsPage"
// Layouts
import AdminLayout from "./Component/layout/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> }, // shows at "/"
      { path: "product-show", element: <ProductShow /> },
      { path: "product-cards", element: <ProductCards /> },
      {path:"StartCard", element: <StartCard />},
      {path:"ProductManage", element: <ProductManage />},
      {path:"dashboard", element: <DashboardPage />},
      {path:"ProductDetailsPage", element: <ProductDetailsPage />},
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <Navigate to="Sidebar" replace /> }, // redirect "/admin" → "/admin/dashboard"
      { path: "Dashboard", element: <DashboardPage /> },
      { path: "users", element: <UsersPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "ProductManage", element: <ProductManage /> },
      { path: "startcard", element: <StartCard /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
