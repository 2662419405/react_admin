import React, { ReactElement, useEffect } from "react";
import Axios from "axios";

interface Props {}

export default function Home({}: Props): ReactElement {
  useEffect(() => {
    Axios.get("http://mock.shtodream.cn/mock/5ea655fa0f0ab03f6d504777/login").then((res) => {
      console.log(res);
    });
  }, []);
  return <div>123</div>;
}
