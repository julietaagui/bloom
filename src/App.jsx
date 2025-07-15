import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hook/authContext";
import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Offers from "./components/Offers";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";
import OffersPage from "./pages/OffersPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Sale from "./pages/Sale";

export default function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <div style={{ height: "70px" }}></div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container my-5">
                  <Banner />
                </div>
                <Category />
                <Product />
                <Offers />
              </>
            }
          />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/sale"
            element={
              <ProtectedRoute>
                <Sale />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart-page"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/offers"
            element={
              <ProtectedRoute>
                <OffersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
