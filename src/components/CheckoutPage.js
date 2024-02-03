// CheckoutPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import img from '../assets/img.jpg'
import { MdDelete } from "react-icons/md";


const CheckoutPage = ({ cartItems, onSubmit, onRemove }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/review-and-submit');
  };

  const handleRemove = (productId) => {
    onRemove(productId);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close-button" onClick={() => navigate('/')}>
          &times;
        </span>
        <div className='checkoutpop'>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <button type="submit" className="cusbtn">
              Submit Order
            </button>
          </form>
          <div className='producttable'>
          <table class="tg">
            {/* <thead>
              <tr>
                <th class="tg-0pky">Product</th>
                <th class="tg-0pky">Price</th>
                <th class="tg-0lax">Actions</th>
              </tr>
            </thead> */}
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td class="tg-0pky"><img src={img} alt="" /></td>
                  <td class="tg-0pky">{item.name}<br/></td>
                  <td class="tg-0pky">${item.price}</td>
                  <td class="tg-0lax">
                    <button onClick={() => handleRemove(item.id)} className='delbtn'><MdDelete/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          
          {/* <table className=''>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}

        </div>


      </div>
    </div>
  );
};

export default CheckoutPage;
