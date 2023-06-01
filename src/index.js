import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));  // is document selector par
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />                           {/* ye sara daal do*/}
    </BrowserRouter>
  </React.StrictMode>
);

