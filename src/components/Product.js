import React from 'react';

import './Product.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
