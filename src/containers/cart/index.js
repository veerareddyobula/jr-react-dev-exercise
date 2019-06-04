import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addNewBreadcrumb } from "./../../components/Breadcrums/action";
import { removeFromCartAction } from "../../actions/allItemsActions";

class Cart extends Component {
  componentDidMount() {
    this.props.addNewBreadcrumb("Cart", true);
  }

  getTotalItemsPrice = () => {
    const { allItems } = this.props;
    const { cartItems } = allItems;
    let totalPrice = 0;
    _.forEach(cartItems, items => {
      totalPrice = totalPrice + items.price.base_unit;
    });
    return totalPrice;
  };

  removeFromCartHandler = item => {
    this.props.removeFromCartAction(item);
  };

  render() {
    const { allItems } = this.props;
    const { cartItems } = allItems;
    return (
      <div className="container">
        <table className="bordered highlight responsive-table">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Item</th>
              <th style={{ width: "30%" }}>Price</th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            {cartItems && cartItems.length > 0 ? (
              <Fragment>
                {cartItems.map(item => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.price.base_unit}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          onClick={() => this.removeFromCartHandler(item)}
                        >
                          <i className="material-icons">clear</i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <th>Total</th>
                  <th>{this.getTotalItemsPrice()}</th>
                  <th />
                </tr>
              </Fragment>
            ) : (
              <tr>
                <td colSpan="3">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ allItems }) => {
  return {
    allItems
  };
};

export default connect(
  mapStateToProps,
  { addNewBreadcrumb, removeFromCartAction }
)(Cart);
