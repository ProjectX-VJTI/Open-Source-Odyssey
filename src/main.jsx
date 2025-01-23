import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Created a root element and to render the App component. (modified)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);