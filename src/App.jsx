import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Success from "./pages/Success/Success";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
}
