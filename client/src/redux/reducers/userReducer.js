import { AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../types";

const initialState = {
  user: "",
  userId: "",
  isAuth: false,
  message: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
        userId: action.userId,
        isAuth: action.isAuth,
        message: action.message,
        LoginSuccess: action.LoginSuccess,
      };
    case REGISTER_USER:
      return { ...state, JoinSuccess: action.payload };
    case AUTH_USER:
      return {
        ...state,
        success: action.LogOutSuccess,
        userInfo: action.userInfo,
        isAuth: action.isAuth,
      };
    // 로그아웃 테스트 해볼 것.
    case LOGOUT_USER:
      return {
        ...state,
        userId: action.userId,
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
