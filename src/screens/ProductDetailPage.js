import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Collapse, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../customHooks/useFetch';
// import useFetch from '../hooks/useFetch';
// useFetch

const envBaseUrl = "https://frontend-assessment-server.onrender.com/api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, loading, error, sendRequest } = useFetch(`${envBaseUrl}/products/${id}`);

  const [openDescription, setOpenDescription] = useState(false);
  const [openAllergenInfo, setOpenAllergenInfo] = useState(false);
  const [openCookingInstruction, setOpenCookingInstruction] = useState(false);
  // const [review, setReview] = useState('');

  // const handleReviewSubmit = async (e) => {
  //   e.preventDefault();
  //   await sendRequest('POST', `${envBaseUrl}/products/${id}/reviews`, { review });
  // };

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  if (!product) {
    return <h1 className="text-center">Product not found</h1>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.productImage}
            className="img-fluid"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name} 100% Organic</h1>
          <h3>${product.selling_price.toFixed(2)}</h3>
          
          <div className="mb-2">
            <Button
              onClick={() => setOpenDescription(!openDescription)}
              aria-controls="description-collapse-text"
              aria-expanded={openDescription}
            >
              Product Description
            </Button>
            <Collapse in={openDescription}>
              <div id="description-collapse-text">
                <Card>
                  <Card.Body>{product.description}</Card.Body>
                </Card>
              </div>
            </Collapse>
          </div>

          <div className="mb-2">
            <Button
              onClick={() => setOpenAllergenInfo(!openAllergenInfo)}
              aria-controls="allergenInfo-collapse-text"
              aria-expanded={openAllergenInfo}
            >
              Allergen Info
            </Button>
            <Collapse in={openAllergenInfo}>
              <div id="allergenInfo-collapse-text">
                <Card>
                  <Card.Body>{product.allergen_info}</Card.Body>
                </Card>
              </div>
            </Collapse>
          </div>

          <div className="mb-2">
            <Button
              onClick={() => setOpenCookingInstruction(!openCookingInstruction)}
              aria-controls="cookingInstruction-collapse-text"
              aria-expanded={openCookingInstruction}
            >
              Cooking Instruction
            </Button>
            <Collapse in={openCookingInstruction}>
              <div id="cookingInstruction-collapse-text">
                <Card>
                  <Card.Body>{product.cooking_instruction}</Card.Body>
                </Card>
              </div>
            </Collapse>
          </div>

          {/* <Form onSubmit={handleReviewSubmit}>
            <Form.Group controlId="review">
              <Form.Label>Write a Review</Form.Label>
              <Form.Control
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit Review</Button>
          </Form> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
