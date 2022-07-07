import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import App from './App';

import '../src/login/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
