import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import { Button, Tooltip, Input, message } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Footer } from "../../components";
import "./style.scss";

interface Iprops {}

const Login: React.FC<Iprops> = (props) => {
  return (
    <section className="login-page">
      <a
        rel="noopener noreferrer"
        className="login-right"
        href="https://github.com/2662419405"
        target="_blank"
      >
        <img
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          alt="github"
        />
      </a>
      <div className="wrap">
        <div>
          <div className="logo-wrap">
            <img className="logo" src={require("../../assets/common/sh.png")} />
            <em>TS + Hooks</em>
          </div>
          <Button size="large" className="weitiao-btn" block={true} type="primary">
            登录
          </Button>
          <div className="other-login">
            <span className="txt">其他登录方式</span>
            <GithubOutlined className="github-icon" />
            <div className="href-right">
              <Tooltip
                placement="bottom"
                title="账号密码分别为123456,推荐使用第三方github进行登录"
              >
                <span className="text-right">注册账号</span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default connect(
  (state: StoreState) => ({
    name: state.User.userinfo.username,
  }),
  null
)(Login);
