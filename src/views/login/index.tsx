import React, { useCallback } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import { Button, Tooltip, Input, message } from "antd";
import { getRandom } from "../../utils/random";
import API from "../../api";
import {
  GithubOutlined,
  UserOutlined,
  LockOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Footer } from "../../components";
import "./style.scss";

interface Iprops {}

let captcha = getRandom();

const Login: React.FC<Iprops> = (props) => {
  const reloadCaptcha = useCallback((e) => {
    captcha = getRandom();
    let url = API.getCaptcha + captcha;
    e.target.src = url;
  }, []);

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
          <Input.Group>
            <Input
              prefix={<UserOutlined />}
              maxLength={32}
              autoComplete="off"
              placeholder="UserName"
            />
            <Input
              prefix={<LockOutlined />}
              type="password"
              maxLength={32}
              autoComplete="off"
              placeholder="password"
            />
            <Input
              prefix={<PictureOutlined className="anticon-plus" />}
              maxLength={4}
              autoComplete="off"
              placeholder="请输入验证码"
              suffix={
                <img
                  className="captcha"
                  src={API.getCaptcha + captcha}
                  onClick={reloadCaptcha}
                />
              }
            />
          </Input.Group>
          <Button
            size="large"
            className="weitiao-btn"
            block={true}
            type="primary"
          >
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
