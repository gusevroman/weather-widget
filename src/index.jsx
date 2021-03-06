import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './Components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Redirect exact from="/" to="/all" />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
