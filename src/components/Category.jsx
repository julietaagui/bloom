export default function Category() {
  const categories = [
    {
      title: "Remeras",
      img: "/remera.png",
    },
    {
      title: "Buzos",
      img: "/buzo.png",
    },
    {
      title: "Gorras",
      img: "/gorra.png",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#F8E3E3" }}>
      <div className="container">
        <h2 className="text-center text-pri mb-5">Tipos de Productos</h2>
        <div className="row justify-content-center">
          {categories.map((cat, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4" key={index}>
              <img
                src={cat.img}
                alt={cat.title}
                className="rounded-circle mb-2 border img-fluid"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <p className="text-pri fw-semibold">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
