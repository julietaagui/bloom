export default function Offers() {
  return (
    <div
      className="custom-container mt-5  d-flex justify-content-between align-items-center mb-5"
      style={{ maxWidth: "100%", gap: "15px", flexWrap: "nowrap" }}
    >
      <div className="card card-sec mb-3 border-radius" style={{ maxWidth: "900px", width: "600px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="/section.png"
              className="img-fluid border-radius"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body text-pri">
              <h5 className="card-title">PUMA</h5>
              <p className="card-text">
                Potenciá tu estilo con hasta 30% OFF en productos Puma. Rendí
                más, pagá menos.<br/>
                <a className="text-pri" href="#" style={{ textDecoration: "underline"}}>
                Ver promociones
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-sec mb-3 border-radius" style={{ maxWidth: "900px", width: "600px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src="/adidas.png"
              className="img-fluid border-radius"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body text-pri">
              <h5 className="card-title">ADIDAS</h5>
              <p className="card-text">
                Potenciá tu estilo con hasta 30% OFF en productos Puma. Rendí
                más, pagá menos.<br/>
                <a className="text-pri" href="#" style={{ textDecoration: "underline"}}>
                Ver promociones
              </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
