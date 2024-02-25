import React from 'react';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/uISlice';

const Notification = ({ type = 'info', message = 'Default' }) => {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.hideNotification());
  };

  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
