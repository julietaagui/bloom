import { Helmet } from "react-helmet";

export default function AboutUs() {
  const items = [
    { id: 1, name: "Calidad que se siente", icon: "bi-bag" },
    { id: 2, name: "Diseños Modernos", icon: "bi bi-heart" },
    { id: 3, name: "Envios a todo el país", icon: "bi bi-truck" },
    { id: 4, name: "Compra fácil y rápida", icon: "bi-cart" },
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
    <div className="mt-5 text-center mb-5">
      <Helmet>
        <title>Sobre Nosotros | Bloom</title>
        <meta
          name="description"
          content="Conoce más sobre Bloom: nuestra misión, valores y por qué somos tu mejor opción para compras en línea."
        />
      </Helmet>

      <div className="container">
        <h1 className="my-5 text-pri">Sobre Nosotros</h1>
        <div className="row g-5">
          <div className="col-12 col-md-4 d-flex align-items-stretch">
            <img
              src="/About-Bloom.png"
              className="img-fluid w-100 rounded"
              alt="Sobre Nosotros"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-8 d-flex align-items-center">
            <div className="text-md-start p-3">
              <h5 style={{ lineHeight: "1.6" }}>
                En Bloom, creemos que comprar en línea debe ser fácil, seguro y
                satisfactorio. Desde nuestros inicios, nos propusimos ofrecer
                productos de calidad, precios competitivos y un servicio al
                cliente que realmente escuche y responda. Nos especializamos en
                [tipo de productos que vendes, por ejemplo: tecnología, moda,
                artículos para el hogar], seleccionando cuidadosamente cada
                artículo para asegurarnos de que cumpla con los estándares que
                nuestros clientes merecen. Nuestro equipo está conformado por
                personas apasionadas por la innovación, el diseño y la
                experiencia de usuario. Trabajamos cada día para mejorar tu
                experiencia de compra y brindarte la confianza de que estás
                eligiendo lo mejor. Gracias por ser parte de nuestra comunidad.
                ¡Tu satisfacción es nuestra prioridad!
              </h5>
            </div>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "#F8E3E3" }} className="py-5 mt-5">
        <div className="container">
          <h2 className="text-center text-pri mb-5">¿Por qué elegirnos?</h2>
          <div className="row justify-content-center">
            {items.map((item) => (
              <div
                className="col-6 col-sm-4 col-md-3 text-center mb-4 icon-pri"
                key={item.id}
              >
                <i className={item.icon}></i>
                <p className="text-pri fw-semibold fs-5">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container my-5">
        <h3 className="text-pri mb-4">Mis Redes Sociales</h3>
        <div className="row justify-content-center">
          {data.map((social) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={social.id}>
              <div className="card social-card h-100">
                <div className="card-body d-flex flex-column align-items-center text-center text-white">
                  <div className="icon-container mb-3">
                    <i className={social.icon} aria-label={`Ícono de ${social.name}`}></i>
                  </div>
                  <h3 className="card-title">{social.name}</h3>
                  <p className="card-text">{social.description}</p>
                  <a
                    href="#"
                    className="btn btn-sec rounded-pill mt-auto"
                    style={{ border: "none" }}
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="w-100 mt-5">
        <img
          src="/frame-bloom.png"
          alt="Decorativo Bloom"
          className="img-fluid w-100"
          style={{ objectFit: "cover", display: "block" }}
        />
      </section>
    </div>
  );
}
