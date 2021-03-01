import { budgetApi } from "../api";
import { CREATE_DATE } from "../types";

export const getDateInfo = async (dataToSubmit) => {
  const request = await budgetApi.getBudgetMonth(dataToSubmit);
  return {
    type: CREATE_DATE,
    yearInfo: dataToSubmit.year,
    monthInfo: dataToSubmit.month,
    payload: request,
  };
};
