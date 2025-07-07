import { NavLink } from "react-router-dom";

export default function Offers() {
  return (
    <div className="container my-5">
      <div className="row gy-4">
        <div className="col-12 col-lg-6">
          <div className="card card-sec h-100 border-radius">
            <div className="row g-0 h-100">
              <div className="col-12 col-md-6">
                <img
                  src="/section.png"
                  className="img-fluid h-100 w-100 object-fit-cover border-radius"
                  alt="Puma Promo"
                />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-pri">
                <div className="card-body">
                  <h5 className="card-title">PUMA</h5>
                  <p className="card-text">
                    Potenciá tu estilo con hasta 30% OFF en productos Puma. Rendí más, pagá menos.
                  </p>
                  <NavLink
                    className="text-pri"
                    to="/offers"
                    style={{ textDecoration: "underline" }}
                  >
                    Ver promociones
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="card card-sec h-100 border-radius">
              <div className="row g-0 h-100">
                <div className="col-12 col-md-6">
                  <img
                    src="/adidas.png"
                    className="img-fluid h-100 w-100 object-fit-cover border-radius"
                    alt="Adidas Promo"
                  />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-pri">
                  <div className="card-body">
                    <h5 className="card-title">ADIDAS</h5>
                    <p className="card-text">
                      Potenciá tu estilo con hasta 30% OFF en productos Adidas.
                      Rendí más, pagá menos.
                    </p>
                    <NavLink
                    className="text-pri"
                    to="/offers"
                    style={{ textDecoration: "underline" }}
                  >
                    Ver promociones
                  </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}