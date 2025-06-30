import { Modal, Button } from "react-bootstrap";

export default function ModalPayment({
  showModal,
  setShowModal,
  handlePayment,
  totalAmount,
}) {
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Pago</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas proceder con el pago?</p>
        <p>Total a pagar: ${totalAmount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-sec" style={{ width: "48%" }} variant="secondary" onClick={() => setShowModal(false)}>
          Cancelar
        </Button>
        <Button className="btn-pri" style={{ width: "48%" }} variant="primary" onClick={handlePayment}>
          Confirmar Pago
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
