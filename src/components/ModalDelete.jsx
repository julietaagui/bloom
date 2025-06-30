import { Modal, Button } from "react-bootstrap";

export default function ModalDelete({
  showModal,
  setShowModal,
  handleDelete,
  productName,
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
        <Modal.Title>Eliminar producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          ¿Estás seguro de que querés eliminar
          {productName ? ` "${productName}"` : " este producto"}?
        </p>
        <p>Esta acción no se puede deshacer.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-sec"
          style={{ width: "48%" }}
          variant="secondary"
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </Button>
        <Button
          className="btn-pri"
          style={{ width: "48%" }}
          variant="danger"
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
