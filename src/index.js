import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import {AuthContextProvider} from './context/AuthContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <React.StrictMode>
    <AuthContextProvider>
    
      <App />
    </AuthContextProvider> 

  </React.StrictMode>
  </BrowserRouter>
);
