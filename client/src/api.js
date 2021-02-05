import axios from "axios";
import routes from "./routes";

const api = axios.create({
  baseURL: "/api",
});

export const userApi = {
  getLogOut: () => api.get(routes.login),
  postLogin: (data) => api.post(routes.login, data),
  postJoin: (data) => api.post(routes.join, data),
  getAuth: (data) => api.get(routes.auth, data),
};

export const myApi = {
  getUserInfo: (id) => api.get(routes.mypage(id)),
  editUserInfo: (id) => api.post(routes.editMypage(id)),
};

export const payingApi = {
  getPayingInfo: () => api.get(routes.paying),
  getPayingDetail: (id) => api.get(routes.payings(id)),
  postPayingInfo: (id) => api.post(routes.postPaying(id)),
  editPayingInfo: (id) => api.post(routes.editPaying(id)),
  deletePayingInfo: (id) => api.get(routes.deletePaying(id)),
};

export const savingApi = {
  getSavingInfo: () => api.get(routes.saving),
  getSavingDetail: (id) => api.get(routes.savings(id)),
  postSavingInfo: (id) => api.post(routes.postSaving(id)),
  editSavingInfo: (id) => api.post(routes.editSaving(id)),
  deleteSavingInfo: (id) => api.get(routes.deleteSaving(id)),
};

export const categoryApi = {
  getGroceryInfo: () => api.get(routes.categoryGrocery),
  getEatOutInfo: () => api.get(routes.categoryEatout),
  getFashionInfo: () => api.get(routes.categoryFashion),
  getLiquorInfo: () => api.get(routes.categoryLiqour),
  getTransporInfo: () => api.get(routes.categoryTranportation),
  getEducationInfo: () => api.get(routes.categoryEducation),
  getRentInfo: () => api.get(routes.categoryRent),
  getDonationInfo: () => api.get(routes.categoryDonation),
  getDepositInfo: () => api.get(routes.categoryDeposit),
  getSavingsInfo: () => api.get(routes.categorySaving),
  getStockInfo: () => api.get(routes.categoryStock),
  getLoanInfo: () => api.get(routes.categoryLoan),
  getRealestateInfo: () => api.get(routes.categoryRealestate),
};

export default api;
