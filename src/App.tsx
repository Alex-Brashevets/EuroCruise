import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { RouterProvider } from "react-router";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddServices from "./pages/AddServices/AddServices";
import Delivery from "./pages/Delivery/Delivery";
import Sales from "./pages/Sales/Sales";
const TrackingPage = lazy(() => import("./pages/TrackingPage/TrackingPage"));
const ServiceCentr = lazy(() => import("./pages/ServiceCentr/ServiceCentr"));
const  NewsArticlePage = lazy(() => import("./pages/NewsArticlePage/NewsArticlePage"));


const DefaultRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/about-us" element={<MainPage />} />
      <Route path="/add-services" element={<AddServices />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/news/:id" element={<Suspense ><NewsArticlePage /></Suspense>} />
      <Route path="/tracking" element={<Suspense ><TrackingPage /></Suspense>} />
      <Route path="/service-center" element={<Suspense ><ServiceCentr /></Suspense>} />
    </Route>
  )
);
function App() {
  return (
    <><Suspense fallback="">
      <RouterProvider router={DefaultRouter} />
      </Suspense>
    </>
  );
}
export default App;
