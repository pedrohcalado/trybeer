import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/client/ClientProvider';
import App from './App';
import GeneralProvider from './context/general/GeneralProvider';
import AdminProvider from './context/admin/AdminProvider';

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <ContextProvider>
        <AdminProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AdminProvider>
      </ContextProvider>
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
