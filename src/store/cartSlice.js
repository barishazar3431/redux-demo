import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  showCart: false,
  isModified: false,
};

const cartSlice = createSlice({
  initialState: initialCartState,
  name: 'cart-slice',
  reducers: {
    addToCart: (state, action) => {
      state.isModified = true;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      state.isModified = true;
      const removeId = action.payload;

      const existingItem = state.items.find((item) => item.id === removeId);
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== removeId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setCartData: (state, action) => {
      const { items, totalQuantity, totalPrice } = action.payload;
      state.items = items || [];
      state.totalQuantity = totalQuantity || 0;
      state.totalPrice = totalPrice || 0;
      state.isModified = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
