import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ProductModal({
  show,
  onClose,
  onSave,
  categoryName,
  productToEdit,
}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (show) {
      if (productToEdit) {
        setTitle(productToEdit.title);
        setPrice(productToEdit.price);
        setImage(productToEdit.images ? productToEdit.images[0] : "");
        setId(productToEdit.id);
      } else {
        setTitle(categoryName || "");
        setPrice("");
        setImage("");
        setId(null);
      }
    }
  }, [show, productToEdit, categoryName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price || !image) return;
    onSave({ id, title, price, images: [image] });
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className="text-pri">
        <Modal.Title className="fs-4">
          {productToEdit ? "Editar producto" : "Crear nuevo producto"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="text-pri">
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Remera"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="$450"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              min="0"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required={!image}
            />
            {image && (
              <div className="mt-3 text-center">
                <img
                  src={image}
                  alt="Vista previa"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="d-flex w-100 gap-2">
          <div style={{ flex: 1 }}>
            <Button
              className="btn-sec w-100"
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button
              className="btn-pri w-100"
              type="submit"
              variant="primary"
            >
              Aceptar
            </Button>
          </div>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
