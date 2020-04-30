import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./router";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
