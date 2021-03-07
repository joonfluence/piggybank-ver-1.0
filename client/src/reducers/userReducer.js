import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

const initialState = {
  user: "",
  isAuth: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      // console.log(action);
      return {
        ...state,
        user: action.userId,
        isAuth: action.isAuth,
        LoginSuccess: action.LoginSuccess,
      };
    case REGISTER_USER:
      return { ...state, JoinSuccess: action.payload };
    case AUTH_USER:
      return {
        ...state,
        success: action.success,
        userInfo: action.userInfo,
        isAuth: action.isAuth,
      };
    // 로그아웃 테스트 해볼 것.
    case LOGOUT_USER:
      return {
        ...state,
        user: action.userId,
        isAuth: action.isAuth,
        LogOutSuccess: action.payload,
      };
    case "test":
      return {
        ...state,
        testSuccess: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
