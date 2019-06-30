import React from "react";
import { Router, Route, Switch } from "react-router";

// route components
import App from "./app.jsx";
import Header from "./header.jsx";
import Test from "./test";

const browserHistory = require("history").createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/1" component={App} />
      <Route exact path="/2" component={App} />
      <Route exact path="/3" component={App} />
      <Route exact path="/4" component={App} />
      <Route exact path="/5" component={App} />
      <Route path="/test" component={Test} />
    </Switch>
  </Router>
);
