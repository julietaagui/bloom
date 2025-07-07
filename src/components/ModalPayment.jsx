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
        <p className="mb-2">¿Estás seguro de que deseas proceder con el pago?</p>
        <p className="fw-semibold">Total a pagar: ${totalAmount}</p>
      </Modal.Body>
      <Modal.Footer className="d-flex flex-column flex-sm-row gap-2">
        <Button
          className="btn-sec w-100"
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </Button>
        <Button
          className="btn-pri w-100"
          variant="primary"
          onClick={handlePayment}
        >
          Confirmar Pago
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
