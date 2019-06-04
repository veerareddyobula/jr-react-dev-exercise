import {ADD_NEW_BREADCRUMB, REMOVE_BREADCRUMB} from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
      case ADD_NEW_BREADCRUMB:
        const {breadcrumbItems} = state;
        if(breadcrumbItems){
            breadcrumbItems.push(action.payload)
        }else {
            return [action.payload]
        }
        return breadcrumbItems;
      case REMOVE_BREADCRUMB:
        return action.payload;
      default:
        return state;
    }
  };