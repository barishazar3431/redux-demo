import { cartActions } from './cartSlice';
import { uiActions } from './uISlice';
import axios from 'axios';

export const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    uiActions.showNotification({
      message: 'Sending Request',
      type: 'warning',
      open: true,
    })
  );
  try {
    await axios.put(
      'https://fir-fba3e-default-rtdb.firebaseio.com/cart.json',
      cart
    );
    dispatch(
      uiActions.showNotification({
        message: 'Request Sent Successfully',
        type: 'success',
        open: true,
      })
    );
  } catch (err) {
    dispatch(
      uiActions.showNotification({
        message: err.message,
        type: 'error',
        open: true,
      })
    );
  }
};

export const fetchCartData = () => async (dispatch) => {
  try {
    dispatch(
      uiActions.showNotification({
        message: 'Replacing Cart Data...',
        type: 'warning',
        open: true,
      })
    );
    const response = await axios.get(
      'https://fir-fba3e-default-rtdb.firebaseio.com/cart.json'
    );
    const cartData = response.data;
    dispatch(cartActions.setCartData(cartData));
    dispatch(
      uiActions.showNotification({
        message: 'Cart Data Replaced Successfully',
        type: 'success',
        open: true,
      })
    );
  } catch (err) {
    dispatch(
      uiActions.showNotification({
        message: err.message,
        type: 'error',
        open: true,
      })
    );
  }
};
