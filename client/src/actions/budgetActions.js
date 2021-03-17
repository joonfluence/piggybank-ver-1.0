import { budgetApi } from "../api";
import {
  CREATE_BUDGET,
  READ_BUDGET,
  UPDATE_BUDGET,
  DELETE_BUDGET,
  MONTH_BUDGET,
} from "../types";

export const createBudget = async (dataBody) => {
  const request = await budgetApi.postBudgetInfo(dataBody);

  return {
    type: CREATE_BUDGET,
    payload: request,
  };
};

export const readBudget = async () => {
  const request = await budgetApi.getBudgetInfo();

  return {
    type: READ_BUDGET,
    ReadSuccess: request.data.ReadSuccess,
    budgetInfo: request.data.budgetInfo,
  };
};

export const updateBudget = async (id) => {
  const request = await budgetApi.editBudgetInfo(id);

  return {
    type: UPDATE_BUDGET,
    payload: request,
  };
};

export const deleteBudget = async (id) => {
  const request = await budgetApi.deleteBudgetInfo(id);

  return {
    type: DELETE_BUDGET,
    payload: request,
  };
};

export const monthBudget = async (dataToSubmit) => {
  const request = await budgetApi.getBudgetMonth(dataToSubmit);

  console.log(request);

  return {
    type: MONTH_BUDGET,
    budgetSum: request.data.budgetSum,
    monthlyBudget: request.data.monthlyBudget,
    monthSuccess: request.data.monthSuccess,
    categorySum: request.data.categorySum,
  };
};
