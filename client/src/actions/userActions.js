import axios from "axios";
import Cookies from "js-cookie";
import { userApi } from "../api";
import { AUTH_USER, REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../types";

export const joinUser = async (dataBody) => {
  const request = await userApi.postJoin(dataBody);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = async (dataBody) => {
  const request = await userApi.postLogin(dataBody);
  return {
    type: LOGIN_USER,
    LoginSuccess: request.data.LoginSuccess,
    userId: request.data.userId,
    Auth: true,
  };
};

export const AuthCheck = async () => {
  const request = await userApi.getAuth();
  return {
    type: AUTH_USER,
    success: request.data.success,
    userInfo: request.data._id,
    isAuth: request.data.isAuth,
  };
};

export const LogOutUser = async () => {
  const request = await userApi.getLogOut().then((response) => response.data);
  return {
    type: LOGOUT_USER,
    userId: request.userId,
    isAuth: request.isAuth,
    payload: request,
  };
};

export const cookieTest = async () => {
  const request = await axios.post(
    "http://localhost:5000/test",
    {},
    { withCredentials: true }
  );

  return {
    type: "test",
    payload: request,
  };
};
