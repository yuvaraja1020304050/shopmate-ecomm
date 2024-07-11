import React from 'react';
import './Cartcard.css';
export const Cartcard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="cart-card">
      <img src={image} alt={name} className="cart-card-image" />
      <div className="cart-card-details">
        <p className="cart-card-name">{name}</p>
        <p className="cart-card-price">${price}</p>
        <button className="cart-card-button">Remove</button>
      </div>
    </div>
  );
};
