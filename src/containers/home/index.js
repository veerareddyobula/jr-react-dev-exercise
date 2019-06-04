import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  fetchAllItemsAction,
  addToCartAction,
  removeFromCartAction,
  getAllOptions
} from "../../actions/allItemsActions";
import { CardItem } from "./../../components/Card";
import { addNewBreadcrumb } from "./../../components/Breadcrums/action";
import { TwoColLayout } from "./../../components/TwoColLayout";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.addNewBreadcrumb("All Items", true);
    this.props.fetchAllItemsAction(null);
    this.props.getAllOptions();
  }

  addToCartHandler = item => {
    this.props.addToCartAction(item);
  };

  removeFromCartHandler = item => {
    this.props.removeFromCartAction(item);
  };

  showItemDetails = (item, options) => {
    console.log('--- showItemDetails ', item, options)
    this.props.history.push({
      pathname: '/details',
      state: { item, options }
    })
  }

  render() {
    const { allItems } = this.props;
    const { data, cartItems, allOptions } = allItems;
    return (
      <Fragment>
        <main>
          <TwoColLayout>
            {data
              ? data.map(item => {
                  return (
                    <CardItem
                      key={item.item_id}
                      item={item}
                      cartItems={cartItems}
                      allOptions={allOptions}
                      addToCartHandler={this.addToCartHandler}
                      removeFromCartHandler={this.removeFromCartHandler}
                      showItemDetails={this.showItemDetails}
                    />
                  );
                })
              : ""}
          </TwoColLayout>
        </main>
      </Fragment>
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
  {
    fetchAllItemsAction,
    addNewBreadcrumb,
    addToCartAction,
    removeFromCartAction,
    getAllOptions
  }
)(HomeContainer);
