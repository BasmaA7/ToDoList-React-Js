// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"; 
import Login from "./Login";
import Register from "./Register";
import Tasks from "./Tasks";
import Create from "./Create";

function App() {
  const isAuthenticated = true; 
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute
          path="/tasks"
          component={Tasks}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/create"
          component={Create}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
