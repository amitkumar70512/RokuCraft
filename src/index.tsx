import App from './App';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Element with ID \'root\' not found.');
}
