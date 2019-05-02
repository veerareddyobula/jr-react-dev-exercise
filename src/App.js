import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import LoginPage from "./containers/login-page";
import DashboardContainer from "./containers/dashboard-container";
import "./App.css";

class App extends Component {
  render() {
    console.log("--==>> I am at App <<==--");
    return (
      <HashRouter>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/" component={LoginPage} />
      </HashRouter>
    );
  }
}

export default App;
