import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  initialState: { notification: null },
  name: 'ui-slice',
  reducers: {
    showNotification: (state, action) => {
      const { message, type, open } = action.payload;

      state.notification = {
        message,
        type,
        open,
      };
    },
    hideNotification: (state) => {
      state.notification.open = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
