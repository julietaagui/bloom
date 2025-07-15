import { useEffect, useState } from "react";
import { getProducts, deleteProduct, createProduct } from "../Api/productsApi";
import ProductModal from "../components/ProductModal";
import ModalDelete from "../components/ModalDelete";
import { Helmet } from "react-helmet";

export default function Sale() {
  const categories = [
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
      .catch((err) => {
        console.error(err);
        setError("Error al cargar productos");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!showModal) {
      setSelectedCategory("");
      setProductToEdit(null);
    }
  }, [showModal]);

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

  const handleSaveProduct = async (product) => {
    try {
      if (product.id) {
        setProducts((prev) =>
          prev.map((p) => (p.id === product.id ? product : p))
        );
      } else {
        const newProduct = await createProduct({
          ...product,
          category: selectedCategory,
        });
        setProducts((prev) => [...prev, newProduct]);
      }
      setShowModal(false);
    } catch (err) {
      console.error(err);
      setError("Error al guardar el producto");
    }
  };

  const handleVenderClick = (category) => {
    setSelectedCategory(category.name);
    setProductToEdit(null);
    setShowModal(true);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setSelectedCategory(product.category || "");
    setShowModal(true);
  };

  return (
    <div className="mt-6 text-center mb-5 d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Vender Productos | Bloom</title>
        <meta
          name="description"
          content="Publicá y gestioná tus productos para vender en Bloom. Fácil y rápido."
        />
      </Helmet>

      <div className="container px-2 px-sm-3 px-md-5">
        <div className="my-5">
          <h3 className="text-pri">¡Hola! ¿Qué vas a vender?</h3>
        </div>

        <div className="row justify-content-center">
          {categories.map((cat) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={cat.id}
            >
              <div className="card social-card h-100 d-flex flex-column justify-content-center align-items-center text-center text-white p-3">
                <div
                  className="icon-container mb-3"
                  style={{ fontSize: "2.5rem" }}
                >
                  <i
                    className={cat.icon}
                    aria-label={`Ícono de ${cat.name}`}
                  ></i>
                </div>
                <h5 className="card-title mb-3">{cat.name}</h5>
                <button
                  className="btn btn-sec rounded-pill w-100"
                  style={{ border: "none" }}
                  onClick={() => handleVenderClick(cat)}
                  aria-label={`Vender en categoría ${cat.name}`}
                >
                  Vender
                </button>
              </div>
            </div>
          ))}
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
                <div
                  className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                  key={product.id}
                >
                  <div className="card card-sec h-100 p-3 d-flex flex-column">
                    <img
                      src={
                        product.images?.[0] || "https://via.placeholder.com/150"
                      }
                      alt={product.title}
                      className="card-img-top mb-3 w-100"
                      style={{
                        maxHeight: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="text-pri mb-2">{product.title}</h5>
                      <p className="text-pri fw-bold mb-3">${product.price}</p>
                      <div className="d-flex w-100 gap-2">
                        <div style={{ flex: 1 }}>
                          <button
                            className="btn btn-sec w-100 w-sm-50"
                            onClick={() => {
                              setProductToDelete(product);
                              setShowDeleteModal(true);
                            }}
                            aria-label={`Eliminar producto ${product.title}`}
                          >
                            Eliminar
                          </button>
                        </div>
                        <div style={{ flex: 1 }}>
                          <button
                            className="btn btn-pri w-100 w-sm-50"
                            onClick={() => handleEditClick(product)}
                            aria-label={`Editar producto ${product.title}`}
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
          productName={productToDelete?.title || ""}
        />
      </div>
    </div>
  );
}
