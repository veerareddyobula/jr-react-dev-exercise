import {
  GET_ALL_ITEMS_SUCCESS,
  GET_ALL_ITEMS_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_OPTIONS
} from "../actions/actionTypes";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ITEMS_SUCCESS:
      return action.payload;
    case GET_ALL_ITEMS_FAILURE:
      return action.payload;
    case ADD_TO_CART:
      let addNewItem = { ...state };
      if (addNewItem.cartItems) {
        addNewItem.cartItems.push(action.payload.data);
      } else {
        addNewItem.cartItems = [action.payload.data];
      }
      return addNewItem;
    case REMOVE_FROM_CART:
      let removeItem = { ...state };
      if (removeItem.cartItems) {
        _.remove(
          removeItem.cartItems,
          item => item.item_id === action.payload.data.item_id
        );
      }
      return removeItem;
    case GET_ALL_OPTIONS:
      return {...state, allOptions: action.payload.data}
    default:
      return state;
  }
};
