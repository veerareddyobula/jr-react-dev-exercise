import React, { Component } from "react";
import $ from "jquery";
import M from "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";

export class Header extends Component {
  componentDidMount() {
    let elem = $(".sidenav");
    M.Sidenav.init(elem, {
      inDuration: 350,
      outDuration: 350,
      edge: "left" //or right
    });
  }
  render() {
    return (
      <nav className="blue-grey darken-2">
        <div className="nav-wrapper container">
          <a
            href="javascript:void(0)"
            data-target="slide-out"
            className="sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
          <a href="javascript:void(0)" className="brand-logo">
            FetchyFox
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active">
              <a href="#/">All Items</a>
            </li>
            <li>
              <a href="#/cart">
                <i className="material-icons">shopping_cart</i>
              </a>
            </li>
          </ul>
        </div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="assets/office.jpg" alt="Background User View" />
              </div>
              <a href="#user">
                <img
                  className="circle"
                  src="assets/yuna.jpg"
                  alt="Avatar User View"
                />
                >
              </a>
              <a href="#name">
                <span className="white-text name">Veera</span>
              </a>
              <a href="#email">
                <span className="white-text email">
                  veerareddy.obula@gmail.com
                </span>
              </a>
            </div>
          </li>
          <li>
            <a className="waves-effect" href="#/">
              All Items
            </a>
          </li>
          <li>
            <a className="waves-effect" href="#/cart">
              <i className="material-icons">shopping_cart</i> Cart
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
