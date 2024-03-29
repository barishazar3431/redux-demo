import React from 'react';

import './Auth.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Auth = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="container">
      <h1>Login</h1>{' '}
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
