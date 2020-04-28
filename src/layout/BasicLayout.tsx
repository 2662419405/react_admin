import React, { useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./BasicLayout.scss";
import { MenuDefault, Footer } from "src/components";

const { Header, Content } = Layout;

const BasicLayout: React.FC<{}> = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout hasSider className="page-basic">
      <MenuDefault collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
