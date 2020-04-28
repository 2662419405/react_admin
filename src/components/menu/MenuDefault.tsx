import React from "react";
import { Menu, Layout } from "antd";
import "./MenuDefault.scss";
import {
  UserOutlined,
  HomeOutlined,
  BookOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";

const { Sider } = Layout;

interface Iprops extends RouteComponentProps {
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[props.history.location.pathname]}
      >
        <Menu.Item key="/home">
          <Link to="/home">
            <HomeOutlined />
            <span>首页</span>
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="sub2"
          title={
            <span>
              <UserOutlined />
              <span>账号管理</span>
            </span>
          }
        >
          <Menu.Item key="/home/user/admin">
            <Link to="/home/user/admin">
              <span>用户管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/home/user/level">
            <Link to="/home/user/level">
              <span>权限管理</span>
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/home/book">
          <Link to="/home/book">
            <BookOutlined />
            <span>笔记管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/home/about">
          <Link to="/home/about">
            <QuestionCircleOutlined />
            <span>关于本站</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuDefault);
