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
    <section
      className="py-5 py-sm-4 py-md-5"
      style={{ backgroundColor: "#F8E3E3" }}
    >
      <div className="container">
        <h2 className="text-center text-pri mb-4 mb-sm-3">
          Tipos de Productos
        </h2>
        <div className="row justify-content-center g-4">
          {categories.map((cat, index) => (
            <div
              className="col-4 col-sm-3 col-md-3 text-center mb-4"
              key={index}
            >
              <div className="mx-auto d-flex flex-column align-items-center">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="rounded-circle mb-2 border img-fluid 
                         d-block 
                         w-50 w-sm-75 w-md-100 w-lg-130 
                         aspect-ratio-square"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-pri fw-semibold">{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
