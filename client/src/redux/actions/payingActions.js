import { payingApi } from "../../api";
import {
  CREATE_PAYING,
  READ_PAYING,
  UPDATE_PAYING,
  DELETE_PAYING,
  MONTH_PAYING,
  CATEGORY_PAYING,
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
    payload: request,
    success: request.data.success,
    payingList: request.data.payingList,
  };
};

export const updatePaying = async (id) => {
  console.log(id);
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
    monthSuccess: request.data.monthSuccess,
    payingSum: request.data.payingSum,
  };
};

export const categoryPaying = async (category) => {
  const request = await payingApi.getCategoryInfo(category);

  return {
    type: CATEGORY_PAYING,
    categorySum: request.data.categorySum,
  };
};
