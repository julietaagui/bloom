export default function Category() {
  const categories = [
    {
      title: "Vasos Térmicos",
      img: "/vaso.png", // cambia la ruta a la tuya
    },
    {
      title: "Termos",
      img: "/termo.png",
    },
    {
      title: "Botellas Térmicas",
      img: "/botella.png",
    },
  ];

  return (
    <div>
      <section style={{ backgroundColor: "#F8E3E3" }} className="py-5">
        <h2 className="text-center text-pri mb-5">Tipos de Productos</h2>
        <div className="container">
          <div className="row justify-content-center">
            {categories.map((cat, index) => (
              <div className="col-6 col-sm-4 col-md-3 text-center mb-4" key={index}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <p className="text-pri fw-semibold">{cat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
