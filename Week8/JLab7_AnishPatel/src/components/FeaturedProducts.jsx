import React from 'react';

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        <div className="product-item">
          <h3>Product 1</h3>
          <p>Product description.</p>
        </div>
        <div className="product-item">
          <h3>Product 2</h3>
          <p>Product description.</p>
        </div>
        <div className="product-item">
          <h3>Product 3</h3>
          <p>Product description.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
