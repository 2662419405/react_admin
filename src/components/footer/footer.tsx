import React from "react";
import "./style.scss";

const Footer: React.FC<{}> = (props) => {
  return (
    <footer className="global-footer">
      Copyright © 2020 -{" "}
      <a rel="noopener noreferrer" href="https://github.com/2662419405" target="_blank">
        2662419405
      </a>
    </footer>
  );
};

export default Footer;
