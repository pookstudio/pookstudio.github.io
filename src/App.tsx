import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";

import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import About from "./components/about";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
