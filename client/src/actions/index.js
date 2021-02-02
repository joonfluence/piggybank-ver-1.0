import { userApi } from "../api";
import AUTH_USER from "../types.js";

// export const

export const AuthCheck = (dataToSubmit) => {
  const request = userApi
    .getAuth(dataToSubmit)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
};
