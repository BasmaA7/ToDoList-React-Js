// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"; // Your custom private route component
import Login from "./Login"; // Your login component
import Register from "./Register"; // Your register component
import Tasks from "./Tasks"; // Your tasks component
import Create from "./Create"; // Your create task component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/tasks" component={Tasks} />
        <PrivateRoute path="/create" component={Create} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
