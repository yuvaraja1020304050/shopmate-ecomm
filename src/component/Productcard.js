import React from 'react';
import './Productcard.css';

export const Productcard = ({ img, para1, para2 }) => {
  return (
    <div className="product-card">
      <img src={img} alt={para1} />
      <h3>{para1}</h3>
      <p>${para2}</p>
      <button>Add to cart</button>
    </div>
  );
};
