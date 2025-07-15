import { useState } from "react";
import { useAuth } from "../hook/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const clearErrorAfterDelay = () => {
    setTimeout(() => setError(""), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validUser = "admin";
    const validPassword = "1234";

    if (user === validUser && password === validPassword) {
      login({ name: user });
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos.");
      clearErrorAfterDelay();
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 px-3"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card card-sec p-5 shadow-sm w-100"
        style={{ maxWidth: "520px" }}
      >
        <Helmet>
          <title>Iniciar Sesión | Bloom</title>
          <meta
            name="description"
            content="Accede a tu cuenta en Bloom para vender, comprar y gestionar tus productos."
          />
        </Helmet>

        <h2 className="text-center text-pri mb-4">Iniciar Sesión</h2>

        <form className="text-pri" onSubmit={handleSubmit}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="user">Usuario</label>
            <input
              id="user"
              type="text"
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-pri w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
