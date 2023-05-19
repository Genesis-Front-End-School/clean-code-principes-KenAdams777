import React from 'react';
import ReactDOM from 'react-dom/client';
// import ErrorBoundary from './components/ErrorBoundary';
import { ErrorBoundary } from 'react-components-ts';
import store from './redux/store';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/react-components-ts/dist/style.css';
import './scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
