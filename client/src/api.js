import axios from "axios";
import routes from "./routes";

const api = axios.create({
  // 백엔드 호스팅 URL로 변경해줘야 함.
  // baseURL: "https://fierce-river-84582.herokuapp.com/api",
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const userApi = {
  getLogOut: () => api.get(routes.logout),
  postLogin: (data) => api.post(routes.login, data),
  postJoin: (data) => api.post(routes.join, data),
  getAuth: () => api.get(routes.auth),
};

export const payingApi = {
  getPayingInfo: () => api.get(routes.paying),
  postPayingInfo: (data) => api.post(routes.paying, data),
  editPayingInfo: (id) => api.put(routes.payings(id)),
  deletePayingInfo: (id) => api.delete(routes.payings(id)),
  getPayingMonth: (data) => api.post(routes.payingMonth, data),
  getPayingDetail: (id) => api.get(routes.payings(), id),
  getCategoryInfo: (data) => api.post(routes.categoryPaying, data),
};

export const savingApi = {
  getSavingInfo: () => api.get(routes.saving),
  postSavingInfo: (data) => api.post(routes.saving, data),
  editSavingInfo: (id) => api.put(routes.savings(id)),
  deleteSavingInfo: (id) => api.delete(routes.savings(id)),
  getSavingMonth: (data) => api.post(routes.savingMonth, data),
  getSavingDetail: (id) => api.get(routes.savings(id)),
  getCategoryInfo: (data) => api.post(routes.categorySaving, data),
};

export const budgetApi = {
  getBudgetInfo: () => api.get(routes.budget),
  postBudgetInfo: (data) => api.post(routes.budget, data),
  editBudgetInfo: (id) => api.put(routes.budgets(id)),
  deleteBudgetInfo: (id) => api.delete(routes.budgets(id)),
  getBudgetMonth: (data) => api.post(routes.budgetMonth, data),
  getBudgetDetail: (id) => api.get(routes.budgets(), id),
};

export const savingGoalApi = {
  getGoalInfo: () => api.get(routes.savingGoal),
  postGoalInfo: (data) => api.post(routes.savingGoal, data),
  deleteGoalInfo: (id) => api.delete(routes.savingGoals(id)),
  editGoalInfo: (id) => api.put(routes.savingGoals(id)),
  getGoalMonth: (data) => api.post(routes.savingGoalMonth, data),
  getGoalDetail: (id) => api.get(routes.savingGoals(id)),
};
