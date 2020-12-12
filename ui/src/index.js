import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';
import './bootstrap.min.css'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

