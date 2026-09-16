import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = ({ product }) => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://shopnest-backend-5iyz.onrender.com';

  // Reliable online images using public URLs from Unsplash (exact matches)
  const unsplashFallbacks = {
    headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500',
    chair: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500',
    camera: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500',
    sneakers: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500',
    // Generic default for other products
    generic: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500'
  };

  // Helper to choose placeholder based on captioned product name
  const getFallbackImageUrl = (name) => {
    if (!name) return unsplashFallbacks.generic;
    const lowerName = name.toLowerCase();
    if (lowerName.includes('headp')) return unsplashFallbacks.headphones;
    if (lowerName.includes('chair')) return unsplashFallbacks.chair;
    if (lowerName.includes('camera')) return unsplashFallbacks.camera;
    if (lowerName.includes('sneaker')) return unsplashFallbacks.sneakers;
    return unsplashFallbacks.generic;
  };

  const imageSrc = product.image?.startsWith('http') 
    ? product.image 
    : `${backendUrl}${product.image?.startsWith('/') ? '' : '/'}${product.image}`;

  return (
    <div className="product-card">
      <img 
        src={imageSrc} 
        alt={product.name} 
        className="product-image"
        onError={(e) => {
          e.target.onerror = null; // Infinite loop prevent karne ke liye
          e.target.src = getFallbackImageUrl(product.name); // Correct placeholder load karega broken link par
        }}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <Link to={`/product/${product._id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;