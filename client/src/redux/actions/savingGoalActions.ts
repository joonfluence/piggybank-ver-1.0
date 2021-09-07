import { savingGoalApi } from "../../Api/api.js";
import {
  CREATE_SAVING_GOAL,
  UPDATE_SAVING_GOAL,
  DELETE_SAVING_GOAL,
  READ_SAVING_GOAL,
  MONTH_SAVING_GOAL,
} from "../types";

export const createSavingGoal = async (dataBody) => {
  const request = await savingGoalApi.postGoalInfo(dataBody);

  return {
    type: CREATE_SAVING_GOAL,
    payload: request,
  };
};

export const readSavingGoal = async () => {
  const request = await savingGoalApi.getGoalInfo();

  return {
    type: READ_SAVING_GOAL,
    savingGoalInfo: request.data.savingGoalInfo,
  };
};

export const updateSavingGoal = async (id) => {
  const request = await savingGoalApi.editGoalInfo(id);

  return {
    type: UPDATE_SAVING_GOAL,
    payload: request,
  };
};

export const deleteSavingGoal = async (id) => {
  const request = await savingGoalApi.deleteGoalInfo(id);

  return {
    type: DELETE_SAVING_GOAL,
    payload: request,
  };
};

export const monthSavingGoal = async (dataBody) => {
  const request = await savingGoalApi.getGoalMonth(dataBody);

  return {
    type: MONTH_SAVING_GOAL,
    monthlySavingGoal: request.data.monthlySavingGoal,
    savingGoalSum: request.data.savingGoalSum,
    monthSuccess: request.data.monthSuccess,
    categorySum: request.data.categorySum,
  };
};
