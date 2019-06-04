import React from "react";

const Details = props => {
  console.log("--- Details ", props);
  const { location } = props;
  const { state } = location;
  if (state) {
    const { item, options, addToCartHandler } = state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l6">
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
              </div>
              <div className="card-action">
                <div className="d-grid-center">
                  <button
                    className="waves-effect waves-light btn"
                    onClick={() => addToCartHandler(item)}
                  >
                    <i className="material-icons">shopping_cart</i> Add To Cart
                    ({item.price.base_unit} / {item.price.iso_4217})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No Details Found</div>;
  }
};

export default Details;
