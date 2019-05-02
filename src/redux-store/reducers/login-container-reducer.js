import { 
    LOGIN_PRESENTER_AUTH_SUCCESS, 
    LOGIN_PRESENTER_AUTH_FAILURE 
  } from "../actions/login-container-actions";

export default (state = {}, action) => {
  console.log('--=== Curd Reducer --== ', state, action);
  switch (action.type) {
    case LOGIN_PRESENTER_AUTH_SUCCESS:
      return action.payload;
    case LOGIN_PRESENTER_AUTH_FAILURE:
      return action.payload;
    default:
      return state;
  }
};