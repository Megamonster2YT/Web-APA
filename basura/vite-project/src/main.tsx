import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Tu componente principal
import './index.css'; // ✨ ¡Esta es la línea clave!

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);