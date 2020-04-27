import React from "react";
import "./style.scss";

const Footer: React.FC<{}> = (props) => {
  return (
    <div className="global-footer">
      <div>
        Copyright @ 2020 TS+Hooks
        <a
          href="https://github.com/2662419405"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;2662419405
        </a>
      </div>
    </div>
  );
};

export default Footer;
