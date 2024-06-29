import * as React from 'react';
import {createRoot}  from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store'; // Import your Redux store
import App from './App'; // Import your App component

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  // Wrap the App component with Provider
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Element with ID \'root\' not found.');
}