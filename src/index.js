import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import App from './App/App';
import { Provider } from 'react-redux';
import { initialState, recordsReducers } from './reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = createStore(recordsReducers, initialState, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);