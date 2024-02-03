import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import CheckoutPage from './components/CheckoutPage';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import './App.css';
import { FaCartArrowDown } from 'react-icons/fa';

const App = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 20,
      image: 'https://placekitten.com/200/300', // Example online image URL, replace with your own
      inCart: false,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      image: 'https://placekitten.com/200/301', // Example online image URL, replace with your own
      inCart: false,
    },
    // Add more products as needed
    {
      id: 3,
      name: 'Product 3',
      price: 25,
      image: 'https://placekitten.com/201/300',
      inCart: false,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40,
      image: 'https://placekitten.com/201/301',
      inCart: false,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 15,
      image: 'https://placekitten.com/202/300',
      inCart: false,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 50,
      image: 'https://placekitten.com/202/301',
      inCart: false,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 35,
      image: 'https://placekitten.com/203/300',
      inCart: false,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 60,
      image: 'https://placekitten.com/203/301',
      inCart: false,
    },
    {
      id: 9,
      name: 'Product 9',
      price: 28,
      image: 'https://placekitten.com/204/300',
      inCart: false,
    },
    {
      id: 10,
      name: 'Product 10',
      price: 45,
      image: 'https://placekitten.com/204/301',
      inCart: false,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState(null);

  const addToCart = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, inCart: true } : p
    );
    setProducts(updatedProducts);

    const updatedCartItems = [...cartItems, { ...product, inCart: true }];
    setCartItems(updatedCartItems);
  };

  const handleRemove = (productId) => {
    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, inCart: false } : p
    );
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

    setProducts(updatedProducts);
    setCartItems(updatedCartItems);
  };

  const handleCheckoutSubmit = (formData) => {
    setCustomerInfo(formData);
  };

  const checkoutLinkText = cartItems.length > 0 ? (
    <span>
       <FaCartArrowDown size={25} /> {cartItems.length}
    </span>
  ) : <FaCartArrowDown size={25} />;

  return (
    <Router>
      <div>
        <header>
          <h1>My Online Store</h1>
          <nav>
            <ul>
              <li>
                <Link to="/checkout">{checkoutLinkText}</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={<ProductListing products={products} addToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cartItems={cartItems}
                onSubmit={handleCheckoutSubmit}
                onRemove={(productId) => handleRemove(productId)}
              />
            }
          />
          <Route
            path="/review-and-submit"
            element={<ReviewAndSubmit cartItems={cartItems} customerInfo={customerInfo} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;