import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import { Provider } from 'react-redux';
console.log('store', store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
