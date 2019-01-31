import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import { BrowserRouter as Router } from "react-router-dom";
//link tag where you would use an a tag- uses in nav
//route conditionally renders something based on url
//switch - rendering one component out of choices based on routes?

const rootReducer = combineReducers({
  user: userReducer
})

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
