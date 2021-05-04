import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
// import ReduxSaga from "redux-saga";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers";

const logger = createLogger();

const middlewares = [logger, ReduxThunk, promiseMiddleware];

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("wrapper")
);
