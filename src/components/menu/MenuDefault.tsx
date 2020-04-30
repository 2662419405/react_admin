import React, { useMemo, useCallback } from "react";
import { Menu, Layout } from "antd";
import "./MenuDefault.scss";
import { Link } from "react-router-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MenuConfig } from "src/constants";
import { Icon } from "src/components";
import { Menu as MenuTypes } from "src/types/global";

const { Sider } = Layout;

interface Iprops extends RouteComponentProps {
  collapsed: boolean;
}

const MenuDefault: React.FC<Iprops> = (props) => {
  const { collapsed } = props;

  /** 构建树结构 **/
  const makeTreeDom = useCallback((data): JSX.Element[] => {
    return data.map((v: MenuTypes) => {
      if (v.children) {
        return (
          <Menu.SubMenu
            key={v.key}
            title={
              <span>
                <Icon type={v.icon} />
                <span>{v.title}</span>
              </span>
            }
          >
            {makeTreeDom(v.children)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item key={v.key}>
            <Link to={v.key}>
              <Icon type={v.icon} />
              <span>{v.title}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  }, []);

  /** 处理原始数据，将原始数据处理为层级关系 **/
  const treeDom: JSX.Element[] = useMemo(() => {
    const treeDom = makeTreeDom(MenuConfig);
    return treeDom;
  }, [MenuConfig]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo-home">
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
        {treeDom}
      </Menu>
    </Sider>
  );
};

export default withRouter(MenuDefault);
