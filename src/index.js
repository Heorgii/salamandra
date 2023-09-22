import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { App } from 'components/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';

window.global = {
  BASE_URL: 'http://localhost:3030/api',
  BASE_URL_IMG: 'http://localhost:3030/uploads/',
};
// window.global = {
//   BASE_URL: 'https://',
//   BASE_URL_IMG: 'https://',
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <BrowserRouter basename="salamandra">
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);