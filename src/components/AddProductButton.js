import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import useFetch from '../hooks/useFetch';
// useFetch
import './AddProductButton.css';
import useFetch from '../customHooks/useFetch';

const AddProductButton = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    allergen_info: ''
  });

  const { sendRequest } = useFetch('https://frontend-assessment-server.onrender.com/api/products');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest('POST', 'https://frontend-assessment-server.onrender.com/api/products', formData);
    handleClose();
    // Optionally, refresh product list or notify user
  };

  return (
    <>
      <Button className="add-product-button" onClick={handleShow}>
        Add Organic Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductAllergenInfo">
              <Form.Label>Product Allergen Info</Form.Label>
              <Form.Control
                type="text"
                name="allergen_info"
                value={formData.allergen_info}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProductButton;
