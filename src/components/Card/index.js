import React, { useState } from "react";
import _ from "lodash";
import { RadioComponent, CheckboxComponent } from "./fields";

export const CardItem = ({
  item,
  cartItems,
  allOptions,
  addToCartHandler,
  removeFromCartHandler,
  showItemDetails
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [itemOptions, setItemOptions] = useState({});
  console.log("-- cardItem ", item, cartItems, allOptions);
  if (item) {
    return (
      <div key={item.item_id} className="card">
        <div className="card-image">
          <img src={item.picture_url} alt={item.name} />
          <div className="card-title">
            <div className="d-flex-row">
              <div>{item.name} -- </div>
              <div>
                {item.price.base_unit} / {item.price.iso_4217}
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          <p style={{ minHeight: "9rem" }}>{item.description}</p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {allOptions &&
            allOptions[item.item_id] &&
            allOptions[item.item_id].length > 0 ? (
              <a href="javascript:void(0)" onClick={() => setShowDetails(true)}>
                <i className="material-icons">more_horiz</i> options
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card-action">
          <div className="d-grid-center">
            {cartItems ? (
              _.find(cartItems, item) ? (
                <button
                  className="waves-effect waves-light btn red"
                  onClick={() => removeFromCartHandler(item)}
                >
                  <i className="material-icons">shopping_cart</i> Remove From
                  Cart ({item.price.base_unit} / {item.price.iso_4217})
                </button>
              ) : (
                <button
                  className="waves-effect waves-light btn"
                  onClick={() => addToCartHandler(item)}
                >
                  <i className="material-icons">shopping_cart</i> Add To Cart (
                  {item.price.base_unit} / {item.price.iso_4217})
                </button>
              )
            ) : (
              <button
                className="waves-effect waves-light btn"
                onClick={() => addToCartHandler(item)}
              >
                <i className="material-icons">shopping_cart</i> Add To Cart (
                {item.price.base_unit} / {item.price.iso_4217})
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};
