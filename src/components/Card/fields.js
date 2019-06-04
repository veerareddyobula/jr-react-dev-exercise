import React from "react";

export const RadioComponent = ({ setItemOptions, itemOptions, option }) => {
  return (
    <li>
      <div class="collapsible-header">
        <i class="material-icons">filter_drama</i>First
      </div>
      <div class="collapsible-body">
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
    </li>
  );
};

export const CheckboxComponent = ({ setItemOptions, itemOptions, option }) => {
  return (
    <li>
      <div class="collapsible-header">
        <i class="material-icons">place</i>Second
      </div>
      <div class="collapsible-body">
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
    </li>
  );
};
