import React, { useState, useCallback } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MessageOutlined,
  SmileOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import { Layout, Tooltip, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

interface Element {
  webkitRequestFullscreen?: Function;
  webkitExitFullscreen?: Function;
  mozRequestFullScreen?: Function;
  mozCancelFullScreen?: Function;
  msRequestFullscreen?: Function;
  msExitFullscreen?: Function;
}

interface Iprops {
  collapsed: boolean;
  setColl: (coll: boolean) => void;
  onLogout: () => void;
}

const Headers: React.FC<Iprops> = (props) => {
  const { collapsed } = props;
  const [fullScreen, setFullScreen] = useState(false); // 当前是否是全屏状态
  // 进入全屏
  const requestFullScreen = useCallback(() => {
    const element: HTMLElement & Element = document.documentElement;
    // 判断各种浏览器，找到正确的方法
    const requestMethod =
      element.requestFullscreen || // W3C
      element.webkitRequestFullscreen || // Chrome等
      element.mozRequestFullScreen || // FireFox
      element.msRequestFullscreen; // IE11
    if (requestMethod) {
      requestMethod.call(element);
    }
    setFullScreen(true);
  }, []);

  // 退出登录
  const onMenuClick = useCallback(
    (e) => {
      // 退出按钮被点击
      if (e.key === "logout") {
        props.onLogout();
      }
    },
    [props]
  );

  // 退出全屏
  const exitFullScreen = useCallback(() => {
    // 判断各种浏览器，找到正确的方法
    const element: Document & Element = document;
    const exitMethod =
      element.exitFullscreen || // W3C
      element.mozCancelFullScreen || // firefox
      element.webkitExitFullscreen || // Chrome等
      element.msExitFullscreen; // IE11

    if (exitMethod) {
      exitMethod.call(document);
    }
    setFullScreen(false);
  }, []);
  const toggle = () => {
    props.setColl(!collapsed);
  };
  return (
    <Header className="site-layout-background header" style={{ padding: 0 }}>
      <Tooltip title={props.collapsed ? "展开菜单" : "收起菜单"}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggle,
          }
        )}
      </Tooltip>
      <div className="rightBox">
        <Tooltip placement="bottom" title={fullScreen ? "退出全屏" : "全屏"}>
          <div className="full all_center">
            {fullScreen ? (
              <FullscreenExitOutlined
                className="icon"
                onClick={exitFullScreen}
              />
            ) : (
              <FullscreenOutlined
                className="icon"
                onClick={requestFullScreen}
              />
            )}
          </div>
        </Tooltip>
        <Dropdown
          overlay={
            <Menu className="menu" selectedKeys={[]} onClick={onMenuClick}>
              <Menu.Item key="user">
                <Link to="/home/user/admin">
                  <UserOutlined />
                  个人中心
                </Link>
              </Menu.Item>
              <Menu.Item key="message">
                <Link to="/home/user/level">
                  <MessageOutlined />
                  个人设置
                </Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="logout">
                <LogoutOutlined />
                退出登录
              </Menu.Item>
            </Menu>
          }
          placement="bottomRight"
        >
          <div className="userhead all_center">
            <SmileOutlined />
            <span className="username">admin</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Headers;
