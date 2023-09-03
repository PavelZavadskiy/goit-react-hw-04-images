import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import NotificationProvider from 'use-toast-notification';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider
      config={{
        position: 'top-right',
        isCloseable: false,
        showTitle: true,
        showIcon: true,
        duration: 5,
      }}
    >
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
