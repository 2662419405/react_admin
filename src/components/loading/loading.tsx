import React from "react";
import "./style.scss";

const Loading: React.FC<{}> = () => {
  return (
    <div className="loading">
      <div id="loader"></div>
    </div>
  );
};

export default Loading;
