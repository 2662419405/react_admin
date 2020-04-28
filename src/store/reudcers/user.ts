import { GETUSRTINFO } from "src/store/constants";

interface UserInfoProps {
  provider: string;
  uid: number | undefined;
  username: string;
  password: string;
  loginName: string;
  avatarUrl: string;
  email: string;
  role: string;
  token: string | undefined;
  bio: string;
  location: string;
  createdAt: string;
}

export interface UserStateProps {
  userinfo: UserInfoProps;
}

export const defaultState: UserStateProps = {
  userinfo: {
    provider: "", // github ?
    uid: undefined, // 用户ID
    createdAt: "", // 注册时间
    bio: "", // 简介
    username: "", // 昵称
    password: "", // 经过MD5加密后的密码
    loginName: "", // 登录名
    avatarUrl: "", // 头像
    email: "",
    role: "",
    token: undefined, // 登录凭证
    location: "",
  },
};

interface Iactions {
  type: string;
  value: any;
}

export default (state = defaultState, action: Iactions): UserStateProps => {
  switch (action.type) {
    case GETUSRTINFO:
      const obj: UserStateProps = JSON.parse(JSON.stringify(state));
      obj.userinfo.username = action.value._loginName;
      obj.userinfo.password = action.value._password;
      return obj;
    default:
      return state;
  }
};
