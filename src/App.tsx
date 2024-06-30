import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddServices from "./pages/AddServices/AddServices";
import Delivery from "./pages/Delivery/Delivery";
import Sales from "./pages/Sales/Sales";
import NewsArticlePage from "./pages/NewsArticlePage/NewsArticlePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";


const DefaultRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/about-us" element={<MainPage />} />
      <Route path="/add-services" element={<AddServices />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/news/:id" element={<NewsArticlePage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Route>
  )
);
function App() {
  return (
    <><Suspense fallback="...is loading">
      <RouterProvider router={DefaultRouter} />
      </Suspense>
    </>
  );
}
export default App;
