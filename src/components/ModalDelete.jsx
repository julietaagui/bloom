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
        <p className="text-danger small mb-0">Esta acción no se puede deshacer.</p>
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
          variant="danger"
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
