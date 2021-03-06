import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default Routes;
