import { useState } from "react";
import ModalPayment from "../components/ModalPayment.jsx";
import ModalDelete from "../components/ModalDelete.jsx";
import { useCart } from "../hook/cartContext.jsx";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function CartPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    setShowSuccessAlert(true);
    setShowPaymentModal(false);
    clearCart();
    setTimeout(() => setShowSuccessAlert(false), 3000);
  };

  const handleDelete = () => {
    if (productToDelete) {
      removeFromCart(productToDelete.id);
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  return (
    <div className="container my-5">

      <Helmet>
        <title>Tu Carrito | Bloom</title>
        <meta
          name="description"
          content="Revisa y gestiona los productos en tu carrito antes de finalizar tu compra en Bloom."
        />
      </Helmet>

      <h4 className="mb-4 text-pri">Productos</h4>

      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          ¡Pago realizado con éxito!
        </div>
      )}

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th className="text-pri">Producto</th>
              <th className="text-pri">Cantidad</th>
              <th className="text-pri">Precio</th>
              <th className="text-pri">Total</th>
              <th className="text-pri">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td style={{ width: "60px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td className="text-pri">{item.title}</td>
                <td>
                  <div className="d-flex align-items-center gap-2 text-pri">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="btn btn-sm btn-sec-s"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="btn btn-sm btn-sec-s"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-pri">${item.price}</td>
                <td className="text-pri">${item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-sm text-danger"
                    onClick={() => {
                      setProductToDelete(item);
                      setShowDeleteModal(true);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center border-top pt-3 mt-4 gap-3">
        <h5 className="text-pri mb-0">Total: ${total}</h5>
        <button
          className="btn btn-pri px-5"
          onClick={() => setShowPaymentModal(true)}
        >
          Pagar
        </button>
      </div>

      <ModalPayment
        showModal={showPaymentModal}
        setShowModal={setShowPaymentModal}
        handlePayment={handlePayment}
        totalAmount={total}
      />

      <ModalDelete
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        handleDelete={handleDelete}
        productName={productToDelete?.title}
      />
    </div>
  );
}
