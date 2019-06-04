import {ADD_NEW_BREADCRUMB, REMOVE_BREADCRUMB} from './actionTypes'

export const addNewBreadcrumb = (name, isActive) => async dispatch => {
    dispatch({
        type: ADD_NEW_BREADCRUMB,
        payload: {name, isActive}
    })
    
  };