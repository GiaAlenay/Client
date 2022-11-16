import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index';
import {persistor} from './redux/store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { Auth0Provider } from '@auth0/auth0-react'

import {PersistGate} from 'redux-persist/lib/integration/react';

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-3os76g7vk3pv8aji.us.auth0.com'
    clientId="lqdDdZr9Sak9Xnd7xhXoZhYVfdmnvJKm"
    redirectUri={window.location.origin}>
    <Provider store={store}>

      <PersistGate loading={<div>loading</div>} persistor={persistor}>
        <React.StrictMode>
        <QueryClientProvider client={queryClient}>
           <BrowserRouter>
             <App />
           </BrowserRouter>
          </QueryClientProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();