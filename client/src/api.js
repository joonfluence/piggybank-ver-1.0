import axios from "axios";
import routes from "./routes";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const userApi = {
  getLogOut: () => api.get(routes.logout, { withCredentials: true }),
  postLogin: (data) => api.post(routes.login, data),
  postJoin: (data) => api.post(routes.join, data),
  getAuth: () => api.get(routes.auth),
};

export const payingApi = {
  getPayingInfo: () => api.get(routes.paying),
  postPayingInfo: (data) => api.post(routes.postPaying(), data),
  editPayingInfo: (id) => api.post(routes.editPaying(), id),
  deletePayingInfo: (id) => api.get(routes.deletePaying(), id),
  getPayingMonth: (data) => api.post(routes.payingMonth, data),
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
  getBudgetMonth: (data) => api.post(routes.budgetMonth, data),
  // getBudgetDetail: (id) => api.get(routes.budgets(), id),
};

export const savingGoalApi = {
  getGoalInfo: () => api.get(routes.savingGoal),
  postGoalInfo: (data) => api.post(routes.savingGoal, data),
  editGoalInfo: (id) => api.put(routes.savingGoals(), id),
  getGoalMonth: (data) => api.post(routes.savingGoalMonth, data),
  // getGoalDetail: (id) => api.get(routes.savingGoals(), id),
};
