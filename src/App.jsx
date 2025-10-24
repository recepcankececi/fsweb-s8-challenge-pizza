import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Success from "./pages/Success/Success";

export default function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/order"
          render={() => <Order onSubmit={(data) => setOrderData(data)} />}
        />
        <Route
          path="/success"
          render={() => <Success data={orderData} />}
        />
      </Switch>
    </Router>
  );
}
