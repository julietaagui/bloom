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
        <p className="mb-2">
          ¿Estás seguro de que querés eliminar
          {productName ? ` "${productName}"` : " este producto"}?
        </p>
      </Modal.Body>
      <Modal.Footer className="d-flex w-100 gap-2">
        <div style={{ flex: 1 }}>
          <Button
            className="btn-sec w-100"
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            className="btn-pri w-100"
            variant="danger"
            onClick={handleDelete}
          >
            Eliminar
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
