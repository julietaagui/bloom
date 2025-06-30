import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../Api/productsApi";
import ProductModal from "../components/ProductModal";
import ModalDelete from "../components/ModalDelete";

export default function Sale() {
  const data = [
    { id: 1, name: "Ropa de Mujer", icon: "bi-bag-heart" },
    { id: 2, name: "Ropa de Hombre", icon: "bi-person-standing" },
    { id: 3, name: "Accesorios", icon: "bi-tags" },
    { id: 4, name: "Electrónica", icon: "bi-headphones" },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productToEdit, setProductToEdit] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      setError("Error al eliminar producto");
    }
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;
    await handleDelete(productToDelete.id);
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const handleSaveProduct = (product) => {
    if (product.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      const newProduct = { ...product, id: Date.now() };
      setProducts((prev) => [...prev, newProduct]);
    }
    setShowModal(false);
  };

  const handleVenderClick = (category) => {
    setSelectedCategory(category.name);
    setProductToEdit(null);
    setShowModal(true);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowModal(true);
  };

  return (
    <div className="mt-6 text-center mb-5 d-flex justify-content-center align-items-center">
      <div className="container px-5">
        <div className="my-5">
          <h3 className="text-pri">¡Hola! ¿Qué vas a vender? </h3>
        </div>

        <div className="container">
          <div className="row justify-content-center custom-container">
            {data.map((skil) => (
              <div className="col-6 col-md-6 col-lg-3 mb-4" key={skil.id}>
                <div className="card social-card">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center text-center text-white m-2">
                    <div className="icon-container">
                      <i className={skil.icon} aria-label={`Ícono de ${skil.name}`}></i>
                    </div>
                    <h3 className="card-title m-2 mb-4">{skil.name}</h3>
                    <a
                      href="#"
                      className="btn btn-sec rounded-pill mb-2"
                      style={{ border: "none" }}
                      onClick={() => handleVenderClick(skil)}
                    >
                      Vender
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-5" />
        <h3 className="text-pri mb-4 text-center">Tus productos publicados</h3>

        {loading ? (
          <p className="text-center">Cargando productos...</p>
        ) : error ? (
          <p className="text-danger text-center">Error: {error}</p>
        ) : (
          <div className="row">
            {products.length === 0 ? (
              <p className="text-center">No tienes productos publicados aún.</p>
            ) : (
              products.map((product) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={product.id}>
                  <div className="card card-sec h-100 p-3">
                    <div className="position-relative mb-3">
                      <img
                        src={product.images?.[0] || "https://via.placeholder.com/150"}
                        alt={product.title}
                        className="card-img-top"
                        style={{ maxHeight: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <div className="text-start container">
                          <h5 className="text-pri mb-1">{product.title}</h5>
                          <p className="text-pri fw-bold mb-3">${product.price}</p>
                        </div>
                        <div className="mt-auto d-flex justify-content-between">
                          <button
                            className="btn btn-sec me-2 w-100"
                            onClick={() => {
                              setProductToDelete(product);
                              setShowDeleteModal(true);
                            }}
                          >
                            Eliminar
                          </button>
                          <button
                            className="btn btn-pri w-100"
                            onClick={() => handleEditClick(product)}
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <ProductModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleSaveProduct}
          categoryName={selectedCategory}
          productToEdit={productToEdit}
        />

        <ModalDelete
          showModal={showDeleteModal}
          setShowModal={setShowDeleteModal}
          handleDelete={confirmDelete}
          productName={productToDelete?.title}
        />
      </div>
    </div>
  );
}