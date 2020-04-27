import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./router";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
