import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function handleCartClick() {
    dispatch(cartActions.toggleShowCart());
  }

  return (
    <div className="cartIcon">
      <h3 onClick={handleCartClick}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
