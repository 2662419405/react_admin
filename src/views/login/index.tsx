import React from "react";
import { connect } from "react-redux";
import { StoreState } from "@/store";
import "./style.scss";

interface Iprops {}

const Login: React.FC<Iprops> = (props: any) => {
  console.log(props);
  return <div>123</div>;
};

export default connect(
  (state: StoreState) => ({
    name: state.User.userinfo.username,
  }),
  null
)(Login);
