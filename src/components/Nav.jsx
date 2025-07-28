import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/authContext";
import { useCart } from "../hook/cartContext";

export default function Nav() {
  const { cartItems } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-pri fixed-top">
      <div className="container mx-nav">
        <NavLink className="navbar-brand text-white fw-medium fs-2" to="/">
          Bloom
        </NavLink>

        <button
          className="navbar-toggler burger"
          style={{ color: "#ffffff"}}
          type="button"px
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-2 mb-2 mb-lg-0 fs-5">
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/">
                Inicio
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/product-page">
                Productos
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/about-us">
                Sobre Nosotros
              </NavLink>
            </li>

            {isAuthenticated && (
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white" to="/sale">
                    Vender
                  </NavLink>
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
              </>
            )}

            <li className="nav-item mx-2 d-flex align-items-center">
              {isAuthenticated ? (
                <button
                  className="btn btn-sm btn-sec-s ms-2"
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                >
                  Cerrar sesión
                </button>
              ) : (
                <button
                  className="btn btn-m btn-sec-s"
                  style={{ fontSize: "18px"}}
                  onClick={() => navigate("/login")}
                >
                  Iniciar sesión
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
