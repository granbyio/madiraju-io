import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';  // Global/reset styles
import App from './App';       // Main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);