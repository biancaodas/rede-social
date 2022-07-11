import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import App from './App';

import './login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
