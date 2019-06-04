import {
  GET_ALL_ITEMS_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_OPTIONS
} from "./actionTypes";
import { allItems } from "../service/items";
import {allOptions} from "../service/options"

export const fetchAllItemsAction = itemId => dispatch => {
  if (!itemId) {
    dispatch({
      type: GET_ALL_ITEMS_SUCCESS,
      payload: { data: allItems }
    });
  }
};

export const addToCartAction = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: { data: item }
  });
};

export const removeFromCartAction = item => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { data: item }
  });
};

export const getAllOptions = () => dispatch => {
  dispatch({
    type: GET_ALL_OPTIONS,
    payload: { data: allOptions }
  });
}