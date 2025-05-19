import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Offers from "./components/Offers";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <>
      <Nav />
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
        <Route path="/proyects" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}
