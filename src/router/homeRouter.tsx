import React, { Suspense, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Loading } from "src/components";

const Home = React.lazy(() => import("src/views/Home/home"));
const About = React.lazy(() => import("src/views/Home/about"));
const NotFound = React.lazy(() => import("src/views/Home/NotFound"));

interface Iprops {}

const Routers: React.FC<Iprops> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routers;
