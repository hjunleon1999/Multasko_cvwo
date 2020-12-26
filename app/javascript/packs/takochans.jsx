import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
//import store from '../services/store'

import App from "components/app";


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
  
});
/**
 * ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  )
 */