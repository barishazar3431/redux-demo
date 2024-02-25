import React, { useEffect } from 'react';
import Header from './Header';
import Products from './Products';
import './Layout.css';
import CartItems from './CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../store/cartActions';
const Layout = () => {
  const total = useSelector((state) => state.cart.totalPrice);
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{' '}
      </div>
    </React.Fragment>
  );
};

export default Layout;
