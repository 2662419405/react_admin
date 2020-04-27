import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loading } from "../components";
import Login from "../views/login";
const Home = React.lazy(() => import("../views/Home/home"));

const Routers: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
