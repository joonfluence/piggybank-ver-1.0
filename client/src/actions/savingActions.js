import { savingApi } from "../api";
import {
  CREATE_SAVING,
  READ_SAVING,
  UPDATE_SAVING,
  DELETE_SAVING,
} from "../types";

export const createPaying = async (dataBody) => {
  const request = await savingApi.postSavingInfo(dataBody);

  return {
    type: CREATE_SAVING,
    payload: request,
  };
};

export const readPaying = async () => {
  const request = await savingApi.getSavingInfo();

  return {
    type: READ_SAVING,
    payload: request,
  };
};

export const updatePaying = async (id) => {
  const request = await savingApi.editSavingInfo(id);

  return {
    type: UPDATE_SAVING,
    payload: request,
  };
};

export const deletePaying = async (id) => {
  const request = await savingApi.deleteSavingInfo(id);

  return {
    type: DELETE_SAVING,
    payload: request,
  };
};
