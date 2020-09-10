import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Home, Page1, Page2, Page404 } from "./views";
import ProtectedRoute from "./components/ProtectedRoutes";


const BaseRouter = (props) => {
  return (
    <Router>
      <Switch>
        {/* Free to visit paths */}
        <Route path="/" exact component={Home} />
        <Route path="/page1" component={Page1} />

        <ProtectedRoute {...props} path="/page2" component={Page2} />:

      </Switch>
    </Router>
  );
};

export default BaseRouter;
