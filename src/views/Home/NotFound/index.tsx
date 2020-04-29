import React from "react";
import "./style.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

const NotFound: React.FC<{}> = () => {
  return (
    <div className="page-error">
      <div className="flex-error">
        <div className="title">404</div>
        <div className="info">这个页面不存在</div>
        <Button size="large">
          <Link to="/home">返回首页</Link>
        </Button>
      </div>
      <img src={require("src/assets/img/error.gif")} alt="error" />
    </div>
  );
};

export default NotFound;
