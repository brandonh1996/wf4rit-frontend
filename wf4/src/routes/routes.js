import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Forms from '../pages/Forms';
import Workflows from '../pages/Workflows';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/forms" component={Forms}></Route>
          <Route path="/workflows" component={Workflows}></Route>
        </Switch>
    </Router>
  );
}
