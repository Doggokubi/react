import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginControl from './LoginControl';
import Login from './Login';
import Logout from './Logout';

import LoginControl from './LoginControl';
import Login from './Login';
import Logout from './Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginControl isLogin='false'/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
