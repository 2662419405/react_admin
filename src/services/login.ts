import { myAxios, IAxios } from "../utils";

// 通过账号密码登录
export async function getUserLoginData(data: IAxios) {
  return myAxios.getData(data);
}
