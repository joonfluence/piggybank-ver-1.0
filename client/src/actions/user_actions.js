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
  // postLogin: () => axios.post("api/users/login"); & axios.post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;

  const request = await userApi.postLogin(dataBody);
  return {
    type: LOGIN_USER,
    LoginSuccess: request.data.LoginSuccess,
    userId: request.data.userId,
    Auth: true,
  };
};

export const AuthCheck = async (dataToSubmit) => {
  const request = await userApi
    .getAuth(dataToSubmit)
    .then((response) => response.data);

  // console.log(request);
  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const LogOutUser = async () => {
  const request = await userApi.getLogOut().then((response) => response.data);
  console.log(request);
  return {
    type: LOGOUT_USER,
    userId: request.userId,
    isAuth: request.isAuth,
    payload: request,
  };
};
