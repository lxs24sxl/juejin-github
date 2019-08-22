import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import action from './action_creator';
import store from './store';
import { connect, Provider } from 'react-redux';
import "../src/common/rem"; 

const WrapApp = connect(
  state => state,
  action
)(App)

ReactDOM.render(
  <Provider store={store}>
    <WrapApp></WrapApp>
  </Provider>
, document.getElementById('react-body'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
