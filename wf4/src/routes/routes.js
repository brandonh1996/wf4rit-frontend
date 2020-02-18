import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Forms from '../pages/Forms';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/forms" component={Forms}></Route>
        </Switch>
    </Router>
  );
}
