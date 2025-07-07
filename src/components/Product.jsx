import { useEffect, useState } from "react";
import { useCart } from "../hook/cartContext.jsx";
import { NavLink } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((products) => setData(products))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <div className="container text-center align-items-center">
      <div className="my-5">
        <h3 className="text-pri">Productos</h3>
      </div>

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {data.slice(0, 5).map((product) => (
          <div className="col" key={product.id}>
            <div className="card card-sec h-100 p-3 d-flex flex-column">
              <div className="position-relative mb-3">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid rounded border-radius w-100"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="text-start flex-grow-1 d-flex flex-column px-2">
                <NavLink to="/about-product" className="text-decoration-none">
                  <h6 className="text-pri mb-2">{product.title}</h6>
                </NavLink>
                <div className="mt-auto">
                  <p className="text-pri fw-bold mb-2">${product.price}</p>
                  <button
                    className="btn btn-pri w-100"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.images[0],
                      })
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <NavLink to="/product-page" className="btn btn-sec text-pri my-5">
          Ver Todos los Productos
        </NavLink>
      </div>
    </div>
  );
}
