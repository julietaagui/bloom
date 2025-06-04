import { useCart } from "../hook/cartContext.jsx";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h4 className="mb-4 text-pri">Productos</h4>
      <table className="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Eliminar</th>
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
              <td>{item.title}</td>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>${item.price}</td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button
                  className="btn btn-sm text-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-4">
        <h5>Total</h5>
        <h5 className="text-pri">${total}</h5>
      </div>

      <div className="text-end mt-3">
        <button className="btn btn-pri px-5">Pagar</button>
      </div>
    </div>
  );
}
