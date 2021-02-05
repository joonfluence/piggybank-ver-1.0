import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../types";

function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      // console.log(action.payload);
      return { ...state, LoginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, JoinSucess: action.payload };
    case AUTH_USER:
      return { ...state, AuthSucess: action.payload };
    default:
      return state;
  }
}

export default userReducer;
