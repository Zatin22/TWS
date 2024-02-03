// ProductListing.js
import React from 'react';
import '../App.css';
import img from '../assets/img.jpg'

const ProductListing = ({ products, addToCart }) => {
  return (
    <div class="productlist">
      {/* <h2>Product Listing</h2> */}
      <ul className='productbox'>
        {products.map((product) => (
          <li className='product' key={product.id}>
            <img src={img} alt="" />
            <h1> {product.name}</h1>
            <p><span>$299</span>${product.price}</p>
            <button className='cusbtn' onClick={() => addToCart(product)} disabled={product.inCart}>
              {product.inCart ? 'Go to Cart' : 'Added to Cart'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductListing;