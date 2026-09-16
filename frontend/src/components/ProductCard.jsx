import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = ({ product }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://shopnest-backend-5iyz.onrender.com';

  return (
    <div className="product-card">
      <img src={`${backendUrl}${product.imageUrl}`} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <Link to={`/product/${product._id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
