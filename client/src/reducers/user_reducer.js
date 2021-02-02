import { LOGIN_USER } from "../types";

function userReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
