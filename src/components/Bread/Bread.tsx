import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";

const Breads: React.FC<{}> = () => {
  return (
    <div className="bread">
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined className="bread-icon" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breads;
