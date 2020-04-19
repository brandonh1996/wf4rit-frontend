import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Forms from '../pages/Forms';
import Workflows from '../pages/Workflows';
import Projects from '../pages/Projects';
import Admin from '../pages/Admin';
import Settings from '../pages/Settings';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/forms" component={Forms}></PrivateRoute>
          <PrivateRoute path="/workflows" component={Workflows}></PrivateRoute>
          <PrivateRoute path="/projects" component={Projects}></PrivateRoute>
          <PrivateRoute path="/admin" component={Admin}></PrivateRoute>
          <PrivateRoute path="/settings" component={Settings}></PrivateRoute>
        </Switch>
    </Router>
  );
}
