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
    payload: request,
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

// export const monthBudget = async (year, month) => {
//   const request = await budgetApi.getBudgetMonth(year, month);

//   return {
//     type: MONTH_BUDGET,
//     payload: request,
//   };
// };
