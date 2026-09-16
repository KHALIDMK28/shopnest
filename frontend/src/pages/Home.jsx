import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  const dummyProducts = [
    { _id: '1', name: 'Wireless Noise-Cancelling Headphones', price: 299.99, image: 'headphones' },
    { _id: '2', name: 'Minimalist Modern Chair', price: 150.00, image: 'chair' },
    { _id: '3', name: 'Professional DSLR Camera', price: 1199.99, image: 'camera' },
    { _id: '4', name: 'Classic White Sneakers', price: 85.00, image: 'sneakers' }
  ];

  useEffect(() => {
    axios.get('https://shopnest-backend-5iyz.onrender.com/api/products')
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setProducts(res.data);
        } else {
          setProducts(dummyProducts);
        }
      })
      .catch(() => {
        setProducts(dummyProducts);
      });
  }, []);

  return (
    <div className="home-container">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;