import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState([]);

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

      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 container">
        {data.slice(0, 5).map((product) => (
          <div className="col" key={product.id}>
            <div className="card card-sec h-100 p-3">
              <div className="position-relative mb-3">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid rounded border-radius"
                  style={{ maxHeight: "250px" }}
                />
              </div>
              <div className="text-start container">
                <h6 className="text-pri mb-1">{product.title}</h6>
                <p className="text-pri fw-bold mb-3">${product.price}</p>
              </div>
              <div className="mt-auto d-grid container">
                <button className="btn btn-pri w-100">Ver Producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-sec text-pri mt-5">Ver Todos los Productos</button>
      </div>
    </div>
  );
}
