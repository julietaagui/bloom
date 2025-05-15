export default function Footer() {
  return (
    <footer className="shadow-pink footer-color py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-white">
            <h4>Bloom</h4>
            <p className="mb-0">© 2025 Copyright</p>
          </div>

          <div className="col-12 col-md-6 text-md-end text-white">
            <h6 className="text-uppercase text-white">Contacto</h6>

            <div className="d-flex justify-content-center justify-content-md-end">
              <a className="none" href="#" target="_blank" rel="noreferrer">
                <i
                  className="bi bi-instagram mx-2"
                  style={{ fontSize: "23px", color: "white" }}
                ></i>
              </a>
              <a className="none" href="#" target="_blank" rel="noreferrer">
                <i
                  className="bi bi-facebook mx-2"
                  style={{ fontSize: "23px", color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
