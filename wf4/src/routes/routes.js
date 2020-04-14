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
import Projects from '../pages/Projects';
import Admin from '../pages/Admin';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/forms" component={Forms}></Route>
          <Route path="/workflows" component={Workflows}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/settings" component={Settings}></Route>
        </Switch>
    </Router>
  );
}
