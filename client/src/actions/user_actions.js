import { userApi } from "../api";
import { AUTH_USER, REGISTER_USER } from "../types";
import { LOGIN_USER } from "../types.js";

export const joinUser = async (dataBody) => {
  const request = await userApi.postJoin(dataBody);
  console.log(request);
  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = (dataBody) => {
  // postLogin: () => axios.post("api/users/login"); & axios.post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  const request = userApi.postLogin(dataBody).then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const AuthCheck = (dataToSubmit) => {
  const request = userApi
    .getAuth(dataToSubmit)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};
