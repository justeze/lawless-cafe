import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './components/Route/private-route'
import PublicRoute from './components/Route/public-route'

import Home from "./pages/home/home";
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import History from "./pages/history/history";

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/register" exact component={Register} />
        <PrivateRoute exact path="/" redirectPath="/login" component={Home} />
        <PrivateRoute exact path="/history" redirectPath="/login" component={History} />
      </Switch>
    </Router>
  );
};


export default App;