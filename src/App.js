import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";

import {Header} from "./components/Header";
import Breadcrumbs from "./components/Breadcrums";
import Home from "./containers/home";
import Details from "./containers/details"
import Cart from "./containers/cart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div id="breadcrumOptions">
          <Breadcrumbs />
        </div>
        <HashRouter>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/" component={Home} />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
