// ReviewAndSubmit.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from "react-icons/fa";
import '../App.css';
import img from '../assets/img.jpg'



const ReviewAndSubmit = ({ cartItems, customerInfo }) => {
  return (
    <div className='reviewpage'>
      <div className='thankssec'>
        <span className='checkicon'><FaRegCheckCircle/></span>
        <h2>Thank you for your purchase!</h2>
        <div className='custinfo'>
        <h3 className='custitel'>Cart Items:</h3>
        <table class="tg">
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td class="tg-0pky"><img src={img} alt="" /></td>
                  <td class="tg-0pky">{item.name}</td>
                  <td class="tg-0pky">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
               - ${item.price}
            </li>
          ))}
        </ul> */}
        </div>
        
      </div>
      <div className='custinfo'>
        <h3 className='custitel'>Customer Information:</h3>
        <div className='cusinf'>
          <p><span>First Name:</span> {customerInfo.firstName}</p>
          <p><span>Last Name:</span> {customerInfo.lastName}</p>
          <p><span>Email:</span>{customerInfo.email}</p>
          <p><span>Phone:</span> {customerInfo.phone}</p>
        </div>
        
      </div>
      
      <Link to="/checkout" className='cusbtn'>Back to Checkout</Link>

      
    </div>
  );
};

export default ReviewAndSubmit;
