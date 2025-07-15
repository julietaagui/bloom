import { useEffect, useState } from "react";
import { useCart } from "../hook/cartContext.jsx";
import { Helmet } from "react-helmet";

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
    <div className="container text-center align-items-center my-5">

      <Helmet>
        <title>Productos | Bloom</title>
        <meta
          name="description"
          content="Los mejores productos."
        />
      </Helmet>

      <div className="my-5">
        <h3 className="text-pri">Productos</h3>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {data.map((product) => (
          <div className="col" key={product.id}>
            <div className="card card-sec h-100 p-3 d-flex flex-column">
              <div className="position-relative mb-3">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
              <div className="text-start container flex-grow-1 d-flex flex-column">
                <h6 className="text-pri mb-1">{product.title}</h6>
                <p className="text-pri fw-bold mb-3">${product.price}</p>
                <div className="mt-auto">
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
    </div>
  );
}
