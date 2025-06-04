import { NavLink } from "react-router-dom";
import { useCart } from "../hook/cartContext.jsx";
import "../App.css";

export default function Nav() {
  const { cartItems } = useCart(); 

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-pri">
      <div className="container mx-nav">
        <a className="navbar-brand text-white fw-medium fs-3" href="/">Bloom</a>
        <button
          className="navbar-toggler burger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-2 mb-2 mb-lg-0 fs-5">
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/product-page">Productos</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/about-us">Sobre Nosotros</NavLink>
            </li>
            <li className="nav-item position-relative mx-2">
              <NavLink className="nav-link text-white" to="/cart-page">
                <i className="bi bi-cart"></i>
                {totalItems > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
