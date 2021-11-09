import React from "react";
import ReactDOM from "react-dom";

import initializeFirebaseApp from "./util/initializeFirebaseApp";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from "./App";

import "./index.scss";

import store from "./store/configureStore";

initializeFirebaseApp();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);