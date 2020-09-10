import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Home, Page1, Page2 } from "./views";

const BaseRouter = (props) => {
  return (
    <Router>
      <Switch {...props}>
        <Route path="/" exact component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  );
};

export default BaseRouter;
