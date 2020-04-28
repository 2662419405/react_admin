import { GETUSRTINFO } from "src/store/constants";

export const setUserInfo = (res:object) => {
  return (dispatch: any) => {
    const arr = {
      type: GETUSRTINFO,
      value: res,
    };
    dispatch(arr);
  };
};
