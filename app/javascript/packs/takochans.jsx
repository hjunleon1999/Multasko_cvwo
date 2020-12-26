import React from "react";
import ReactDOM from "react-dom";

//store
import { Provider } from 'react-redux'
//import store from '../services/store'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import App from "components/app";

const store = createStore(rootReducer)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
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