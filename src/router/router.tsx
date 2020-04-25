import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../views/login/index";

const Routers: React.FC<{}> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
