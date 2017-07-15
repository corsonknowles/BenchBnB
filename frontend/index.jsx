import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util'
import configureStore from './store/store.js'
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  window.login = login;
  window.signup = signup;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Your New Rails React Redux App</h1>, root);
});
