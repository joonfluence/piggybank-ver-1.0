import { payingApi } from "../api";
import {
  CREATE_PAYING,
  READ_PAYING,
  UPDATE_PAYING,
  DELETE_PAYING,
  MONTH_PAYING,
} from "../types";

export const createPaying = async (dataBody) => {
  const request = await payingApi.postPayingInfo(dataBody);

  return {
    type: CREATE_PAYING,
    payload: request,
  };
};

export const readPaying = async () => {
  const request = await payingApi.getPayingInfo();

  return {
    type: READ_PAYING,
    success: request.data.success,
    payingList: request.data.payingList,
  };
};

export const updatePaying = async (id) => {
  const request = await payingApi.editPayingInfo(id);

  return {
    type: UPDATE_PAYING,
    payload: request,
  };
};

export const deletePaying = async (id) => {
  const request = await payingApi.deletePayingInfo(id);

  return {
    type: DELETE_PAYING,
    payload: request,
  };
};

export const monthPaying = async (dataBody) => {
  const request = await payingApi.getPayingMonth(dataBody);

  return {
    type: MONTH_PAYING,
    monthSucess: request.data.monthSucess,
    payingSum: request.data.payingSum,
  };
};

// export const detailPaying = async (id) => {
//   const request = await payingApi.getPayingDetail(id);

//   return {
//     type: UPDATE_PAYING,
//     payload: request,
//   };
// };
