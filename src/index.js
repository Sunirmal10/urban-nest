import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './AppContext';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppProvider>
    <App />
    </AppProvider>
    </Provider>
  </React.StrictMode>
);

