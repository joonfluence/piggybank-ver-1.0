import { savingApi } from "../api";
import {
  CREATE_SAVING,
  READ_SAVING,
  UPDATE_SAVING,
  DELETE_SAVING,
  MONTH_SAVING,
  CATEGORY_SAVING,
} from "../types";

export const createSaving = async (dataBody) => {
  const request = await savingApi.postSavingInfo(dataBody);

  return {
    type: CREATE_SAVING,
    payload: request,
  };
};

export const readSaving = async () => {
  const request = await savingApi.getSavingInfo();

  return {
    type: READ_SAVING,
    savingList: request.data.savingList,
    success: request.data.success,
    test: request.data.test,
  };
};

export const updateSaving = async (id) => {
  console.log(id);
  const request = await savingApi.editSavingInfo(id);

  return {
    type: UPDATE_SAVING,
    payload: request,
  };
};

export const deleteSaving = async (id) => {
  const request = await savingApi.deleteSavingInfo(id);

  return {
    type: DELETE_SAVING,
    payload: request,
  };
};

export const monthSaving = async (dataToSubmit) => {
  const request = await savingApi.getSavingMonth(dataToSubmit);

  return {
    type: MONTH_SAVING,
    monthSuccess: request.data.monthSuccess,
    savingSum: request.data.savingSum,
    monthlySaving: request.data.monthlySaving,
  };
};

export const categorySaving = async (category) => {
  const request = await savingApi.getCategoryInfo(category);

  return {
    type: CATEGORY_SAVING,
    payload: request,
    categorySum: request.data.categorySum,
  };
};
