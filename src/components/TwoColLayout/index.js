import React from "react";
import "./twoColLayout.css";

export const TwoColLayout = props => {
  return (
    <div className="container-fluid">
      <div id="twoColLayout" className="row white">
        <div className="col s12 m10 l10">
          <div id="layoutGridRow">{props.children}</div>
        </div>
        <div className="col s12 m2 l2">Sample Items</div>
      </div>
    </div>
  );
};
