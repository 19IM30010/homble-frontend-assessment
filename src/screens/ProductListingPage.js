import React, { useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductListingPage.css';
import AddProductButton from '../components/AddProductButton';
import { useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';
// import useFetch from '../hooks/useFetch';
// useFetch

const envBaseUrl = "https://frontend-assessment-server.onrender.com/api";

const ProductListingPage = () => {
  const { data: products, loading, error, sendRequest, refetch } = useFetch(`${envBaseUrl}/products`);
  const navigate = useNavigate();

  const sortedProducts = useMemo(() => {
    return products ? products.sort((a, b) => a.selling_price - b.selling_price) : [];
  }, [products]);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  // const handleDelete = async (id) => {
  //   await sendRequest('DELETE', `${envBaseUrl}/products/${id}`);
  //   refetch(); // Refetch the product list after deletion
  // };

  if (loading) {
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <AddProductButton />
          </div>
        </div>
        <div className="row">
          {[...Array(6)].map((_, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="product-skeleton"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <h1 className="text-center">{error}</h1>;
  }

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col">
          <AddProductButton />
        </div>
      </div>
      <div className="row">
        {sortedProducts.map(product => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-4"
            key={product.id}
          >
            <div className="card h-100">
              <img
                src={product.productImage}
                className="card-img-top"
                alt={product.name}
                onClick={() => handleProductClick(product.id)}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.selling_price.toFixed(2)}</p>
                {/* <button variant="danger" onClick={() => handleDelete(product.id)}>Delete</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
