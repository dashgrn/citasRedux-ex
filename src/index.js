import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'materialize-css'
import './styles/style.css'
import store from './store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);