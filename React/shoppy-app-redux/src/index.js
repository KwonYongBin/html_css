import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux'
import { store } from './app/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>{/* 생산자 범위 설정 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
