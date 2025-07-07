export default function Footer() {
  return (
    <footer className="shadow-pink footer-color py-4">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-white">
            <h4 className="mb-1">Bloom</h4>
            <p className="mb-0">© 2025 Copyright</p>
          </div>

          <div className="col-12 col-md-6 text-white text-center text-md-end">
            <h6 className="text-uppercase mb-2">Contacto</h6>
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="#" target="_blank" rel="noreferrer" className="mx-2">
                <i className="bi bi-instagram" style={{ fontSize: "23px", color: "white" }}></i>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="mx-2">
                <i className="bi bi-facebook" style={{ fontSize: "23px", color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
