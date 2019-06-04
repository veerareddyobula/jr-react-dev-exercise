import React from "react";
import { connect } from "react-redux";

const Breadcrums = props => {
  const { breadcrumbItems } = props;
  return (
    <nav>
      <div className="nav-wrapper ">
        <div className="col s12">
          {breadcrumbItems ? (
            breadcrumbItems.map(item => {
              return (
                <a href="#!" className="breadcrumb" key={item.name}>
                  {item.name}
                </a>
              );
            })
          ) : (
            <a href="/" className="breadcrumb">
              Home
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({breadcrumbItems}) => {
  return {
    breadcrumbItems
  };
};

export default connect(
  mapStateToProps,
  {}
)(Breadcrums);
