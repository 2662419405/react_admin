import React, { Suspense, useCallback, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "src/components";
import { StoreState } from "src/store";
import { UserStateProps } from "src/store/reudcers/user";
import { setUserInfo } from "src/store/actions";
const Login = React.lazy(() => import("src/views/login"));
const BasicLayout = React.lazy(() => import("src/layout/BasicLayout"));

interface Iprops extends UserStateProps {
  setUserInfoMy: any;
}

const Routers: React.FC<Iprops> = (props) => {
  useEffect(() => {
    const userinfo = localStorage.getItem("userinfo");
    /**
     * sessionStorage中有user信息，但store中没有
     * 说明刷新了页面，需要重新同步user数据到store
     * **/
    if (userinfo && !props.userinfo.uid) {
      props.setUserInfoMy({ _loginName: "admin", _password: "123456" });
    }
  }, []);

  /** 跳转到某个路由之前触发 **/
  const onEnter = useCallback((Component, props) => {
    /**
     *  有用户信息，说明已登录
     *  没有，则跳转至登录页
     * **/
    const userinfo = localStorage.getItem("userinfo");
    if (userinfo) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" render={(props) => onEnter(BasicLayout, props)} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default connect(
  (state: StoreState) => ({
    userinfo: state.User.userinfo,
  }),

  (dispatch: any) => {
    return {
      setUserInfoMy(res: object) {
        dispatch(setUserInfo(res));
      },
    };
  }
)(Routers);
