import { useState } from "react";
import ModalPayment from "../components/ModalPayment.jsx";
import ModalDelete from "../components/ModalDelete.jsx";
import { useCart } from "../hook/cartContext.jsx";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    console.log("Pago confirmado!");
    setShowPaymentModal(false);
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
      <h4 className="mb-4 text-pri">Productos</h4>
      <table className="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th style={{ color: "#8f0502" }}>Producto</th>
            <th style={{ color: "#8f0502" }}>Cantidad</th>
            <th style={{ color: "#8f0502" }}>Precio</th>
            <th style={{ color: "#8f0502" }}>Total</th>
            <th style={{ color: "#8f0502" }}>Eliminar</th>
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
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              </td>
              <td style={{ color: "#8f0502" }}>{item.title}</td>
              <td>
                <div className="d-flex align-items-center gap-3 text-pri">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="btn btn-sm btn-sec-s"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="btn btn-sm btn-sec-s"
                  >
                    +
                  </button>
                </div>
              </td>
              <td style={{ color: "#8f0502" }}>${item.price}</td>
              <td style={{ color: "#8f0502" }}>
                ${item.price * item.quantity}
              </td>
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

      <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-4">
        <h5 style={{ color: "#8f0502" }}>Total</h5>
        <h5 className="text-pri">${total}</h5>
      </div>

      <div className="text-end mt-3">
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
