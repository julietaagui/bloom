import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Product from "./components/Product";
import Section from "./components/Section";
import AboutMe from "./pages/AboutMe";
import ProductPage from "./pages/ProductPage";

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
              <Section />
            </>
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/proyects" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}
