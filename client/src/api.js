import axios from "axios";
import routes from "./routes";

const api = axios.create({
  baseURL: "/api",
});

export const userApi = {
  getLogOut: () => api.get(routes.logout),
  postLogin: (data) => api.post(routes.login, data),
  postJoin: (data) => api.post(routes.join, data),
  getAuth: (data) => api.get(routes.auth, data),
};

export const payingApi = {
  getPayingInfo: () => api.get(routes.paying),
  postPayingInfo: (data) => api.post(routes.postPaying(), data),
  editPayingInfo: (id) => api.post(routes.editPaying(), id),
  deletePayingInfo: (id) => api.get(routes.deletePaying(), id),
  getPayingMonth: ([year, month]) =>
    api.get(routes.payingMonth(), [year, month]),
  // getPayingDetail: (id) => api.get(routes.payings(), id),
};

export const savingApi = {
  getSavingInfo: () => api.get(routes.saving),
  postSavingInfo: (data) => api.post(routes.postSaving(data)),
  editSavingInfo: (id) => api.post(routes.editSaving(id)),
  deleteSavingInfo: (id) => api.get(routes.deleteSaving(id)),
  // getSavingDetail: (id) => api.get(routes.savings(id)),
};

// Budget과 savingGoal을 추가하여야 함.

export const budgetApi = {
  getBudgetInfo: () => api.get(routes.budget),
  postBudgetInfo: (data) => api.post(routes.budget, data),
  editBudgetInfo: (id) => api.put(routes.budgets(), id),
  deleteBudgetInfo: (id) => api.get(routes.budgets(), id),
  getBudgetMonth: ([year, month]) =>
    api.get(routes.budgetMonth(), [year, month]),
  // getBudgetDetail: (id) => api.get(routes.budgets(), id),
};

export const savingGoalApi = {
  getGoalInfo: () => api.get(routes.savingGoal),
  postGoalInfo: (data) => api.post(routes.savingGoal, data),
  editGoalInfo: (id) => api.put(routes.savingGoals(), id),
  getGoalMonth: ([year, month]) =>
    api.get(routes.savingGoalMonth(), [year, month]),
  // getGoalDetail: (id) => api.get(routes.savingGoals(), id),
};
