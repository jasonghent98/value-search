import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';

const dotEnv = require('dotenv').config();


ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <AuthProvider>
      <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

