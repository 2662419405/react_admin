/** 登录页面  */

// ==================
// 所需的各种插件
// ==================
import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../store";
import { getRandom } from "../../utils";
import API from "../../api";
import { getUserLoginData } from "../../services";
import "./style.scss";

// ==================
// 所需的所有组件
// ==================
import { Button, Tooltip, Input, message } from "antd";
import useInput from "../../hooks/useInput";
import {
  GithubOutlined,
  UserOutlined,
  LockOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Footer } from "../../components";

// ==================
// 类型声明
// ==================
import { RouteComponentProps } from "react-router-dom";
import { Ilogin } from "../../interface";

interface Iprops extends RouteComponentProps {}

let captcha = getRandom();

const Login: React.FC<Iprops> = (props) => {
  const username = useInput("");
  const password = useInput("");
  const code = useInput("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    const _loginName = username.val.trim();
    const _password = password.val.trim();
    const _code = code.val.trim();

    try {
      if (!_loginName) throw new Error("用户名不能为空");
      if (!_password) throw new Error("密码不能为空");
      if (!_code) throw new Error("验证码不能为空");
      if (_code !== captcha) throw new Error("验证码错误");

      setLoading(true);
      const data = (await getUserLoginData({
        data: { _loginName, _password },
        url: API.getLogin,
      })) as Ilogin;
      setLoading(false);
      // 登录成功
      if (_loginName === data.username && _password === data.password) {
        props.history.replace("/home");
      } else {
        throw new Error("用户名密码错误");
      }
    } catch (err) {
      message.error(err.message);
      return;
    }
  };
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
            <img
              alt="logo"
              className="logo"
              src={require("../../assets/img/sh.png")}
            />
            <em>TS + Hooks</em>
          </div>
          <Input.Group>
            <Input
              {...username}
              onPressEnter={handleSubmit}
              prefix={<UserOutlined />}
              maxLength={32}
              autoComplete="off"
              placeholder="Username"
            />
            <Input
              {...password}
              prefix={<LockOutlined />}
              onPressEnter={handleSubmit}
              type="password"
              maxLength={32}
              autoComplete="off"
              placeholder="password"
            />
            <Input
              {...code}
              onKeyDown={(e) => {
                if (e.keyCode === 13) handleSubmit();
              }}
              prefix={<PictureOutlined className="anticon-plus" />}
              onPressEnter={handleSubmit}
              maxLength={4}
              autoComplete="off"
              placeholder="请输入验证码"
              suffix={
                <img
                  className="captcha"
                  src={API.getCaptcha + captcha}
                  onClick={reloadCaptcha}
                  alt="code"
                />
              }
            />
          </Input.Group>
          <Button
            size="large"
            className="weitiao-btn"
            block={true}
            type="primary"
            onClick={handleSubmit}
            loading={loading}
          >
            {loading ? "正在登录" : "登录"}
          </Button>
          <div className="other-login">
            <span className="txt">其他登录方式</span>
            <GithubOutlined className="github-icon" />
            <div className="href-right">
              <Tooltip
                placement="bottom"
                title="账号为admin,密码为123456,推荐使用第三方github进行登录"
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
