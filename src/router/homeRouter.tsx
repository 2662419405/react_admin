import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Loading, ErrorBoundary } from "src/components";

const Home = React.lazy(() => import("src/views/Home/home"));
const About = React.lazy(() => import("src/views/Home/about"));
const NotFound = React.lazy(() => import("src/views/Home/NotFound"));

interface Iprops {
  location: Location;
}

const Routers: React.FC<Iprops> = (props) => {
  return (
    <ErrorBoundary location={props.location}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routers;
