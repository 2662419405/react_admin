import React, { useState } from "react";
import { Layout, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import "./BasicLayout.scss";
import { MenuDefault, Footer, Header, Bread } from "src/components";
import Routers from "src/router/homeRouter";

const { Content } = Layout;
const { confirm } = Modal;

interface Iprops {
  location: Location;
  history: any;
}

const BasicLayout: React.FC<Iprops> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const onLogout = () => {
    confirm({
      title: "你确定要退出登录吗?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        localStorage.removeItem("userinfo");
        console.log(props.history.replace("/"));
      },
      onCancel() {},
    });
  };

  return (
    <Layout hasSider className="page-basic">
      <MenuDefault collapsed={collapsed} />
      <Layout className="site-layout">
        <Header
          onLogout={onLogout}
          setColl={(coll) => setCollapsed(coll)}
          collapsed={collapsed}
        />
        <Bread />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routers location={props.location} />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
