export default function AboutUs() {
  const items = [
    {
      id: 1,
      name: "Calidad que se siente",
      icon: "bi-bag",
    },
    {
      id: 2,
      name: "Diseños Modernos",
      icon: "bi bi-heart",
    },
    {
      id: 3,
      name: "Envios a todo el país",
      icon: "bi bi-truck",
    },
    {
      id: 4,
      name: "Compra fácil y rapida",
      icon: "bi-cart",
    },
  ];

  const data = [
    {
      id: 1,
      name: "TikTok",
      icon: "bi bi-tiktok",
      description:
        "Mi TikTok me permite ayudar y educar, generar confianza y atraer pacientes.",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "bi bi-instagram",
      description:
        "Mi Instagram me permite conectar con mi comunidad, compartir información.",
    },
    {
      id: 3,
      name: "Facebook",
      icon: "bi bi-facebook",
      description:
        "Mi Facebook muestra mi trabajo, educa sobre el cuidado de la piel y genera confianza.",
    },
  ];
  return (
    <div className="mt-6 text-center mb-5">
      <div className="container">
        <h1 className="my-5 text-pri" style={{ marginRight: "5rem" }}>
          Sobre Nosotros
        </h1>
        <div className="text-center d-flex justify-content-center align-items-center">
          <div className="row g-5 w-100">
            <div className="col-12 col-md-4 d-flex align-items-stretch">
              <img
                src="/About-Bloom.png"
                className="img-fluid w-100"
                alt="Sobre Nosotros"
                style={{ objectFit: "cover", borderRadius: "1rem" }}
              />
            </div>

            <div className="col-12 col-md-8 d-flex align-items-center">
              <div className="container text-md-start p-3">
                <h5 className="card-text " style={{ lineHeight: "1.6" }}>
                  En Bloom, creemos que comprar en línea debe ser fácil, seguro
                  y satisfactorio. Desde nuestros inicios, nos propusimos
                  ofrecer productos de calidad, precios competitivos y un
                  servicio al cliente que realmente escuche y responda. Nos
                  especializamos en [tipo de productos que vendes, por ejemplo:
                  tecnología, moda, artículos para el hogar], seleccionando
                  cuidadosamente cada artículo para asegurarnos de que cumpla
                  con los estándares que nuestros clientes merecen. Nuestro
                  equipo está conformado por personas apasionadas por la
                  innovación, el diseño y la experiencia de usuario. Trabajamos
                  cada día para mejorar tu experiencia de compra y brindarte la
                  confianza de que estás eligiendo lo mejor. Gracias por ser
                  parte de nuestra comunidad. ¡Tu satisfacción es nuestra
                  prioridad!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#F8E3E3" }} className="py-5 mt-5">
        <h2 className="text-center text-pri mb-5">¿Por que elegirnos?</h2>
        <div className="container">
          <div className="row justify-content-center">
            {items.map((item) => (
              <div
                className="col-6 col-sm-4 col-md-3 text-center mb-4 icon-pri"
                key={item.id}
              >
                <i className={item.icon}></i>
                <p className="text-pri fw-semibold fs-4">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container  text-center align-items-center">
        <div className="my-5">
          <h3 className="text-pri">Mis Redes Sociales</h3>
        </div>
        <div className="container">
          <div className="row justify-content-center custom-container">
            {data.map((skil) => (
              <div className="col-12 col-md-6 col-lg-4" key={skil.id}>
                <div className="card social-card">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center text-white m-2">
                    <div className="icon-container">
                      <i
                        className={`${skil.icon}`}
                        aria-label={`Ícono de ${skil.name}`}
                      ></i>
                    </div>
                    <h3 className="card-title m-2">{skil.name}</h3>
                    <p className="card-text">{skil.description}</p>
                    <a
                      href="#"
                      className="btn btn-light rounded-pill mb-2"
                      style={{ border: "none" }}
                    >
                      Visitar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-100 mt-5">
        <img
          src="/frame-bloom.png"
          alt="Decorativo Bloom"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </section>
    </div>
  );
}
