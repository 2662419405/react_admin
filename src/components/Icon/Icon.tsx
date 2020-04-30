import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import Config from "src/config/index";

interface Iprops {
  type: string;
}

const IconFont = createFromIconfontCN({
  scriptUrl: Config.scriptUrl,
});

const Icon = (props: Iprops) => {
  return <IconFont type={props.type}></IconFont>;
};

export default Icon;
