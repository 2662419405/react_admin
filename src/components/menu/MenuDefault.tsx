import React from "react";
import { Menu, Layout } from "antd";
import "./MenuDefault.scss";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface Iprops {
  collapsed: boolean;
}

const MenuDefault: React.FC<Iprops> = (props) => {
  const { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <Link className="logo-link" to="/">
          <img src={require("src/assets/img/logo.f16d.png")} />
          <div className={collapsed ? "show" : ""}>TS + Hooks</div>
        </Link>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <HomeOutlined />
          <span>首页</span>
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>账号管理</span>
            </span>
          }
        >
          <Menu.Item key="2">
            <span>用户管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span>权限管理</span>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default MenuDefault;
