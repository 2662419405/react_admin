import React from "react";
import "./style.scss";

const Home: React.FC<{}> = (props) => {
  return (
    <div className="home-page">
      <img src={require("src/assets/img/react-logo.jpg")} alt="logo" />
      <div className="title">React-admin</div>
      <p>标准TS + Hooks分层结构，react16、router4、antd4、webpack4、ES6+、TS、Hooks</p>
      <p>后台管理系统模块</p>
    </div>
  );
};

export default Home;
