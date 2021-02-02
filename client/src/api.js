import axios from "axios";
import { routes } from "./routes";

const api = axios.create({
  baseURL: "/api",
});

export const userApi = {
  getLogOut: () => axios.get(routes.login),
  postLogin: () => axios.post(routes.login),
  postJoin: () => axios.post(routes.join),
  getAuth: () => axios.get(routes.auth),
};

export const myApi = {
  getUserInfo: (id) => axios.get(routes.mypage(id)),
  editUserInfo: (id) => axios.post(routes.editMypage(id)),
};

export const payingApi = {
  getPayingInfo: () => axios.get(routes.paying),
  getPayingDetail: (id) => axios.get(routes.payings(id)),
  postPayingInfo: (id) => axios.post(routes.postPaying(id)),
  editPayingInfo: (id) => axios.post(routes.editPaying(id)),
  deletePayingInfo: (id) => axios.get(routes.deletePaying(id)),
};

export const savingApi = {
  getSavingInfo: () => axios.get(routes.saving),
  getSavingDetail: (id) => axios.get(routes.savings(id)),
  postSavingInfo: (id) => axios.post(routes.postSaving(id)),
  editSavingInfo: (id) => axios.post(routes.editSaving(id)),
  deleteSavingInfo: (id) => axios.get(routes.deleteSaving(id)),
};

export const categoryApi = {
  getGroceryInfo: () => axios.get(routes.categoryGrocery),
  getEatOutInfo: () => axios.get(routes.categoryEatout),
  getFashionInfo: () => axios.get(routes.categoryFashion),
  getLiquorInfo: () => axios.get(routes.categoryLiqour),
  getTransporInfo: () => axios.get(routes.categoryTranportation),
  getEducationInfo: () => axios.get(routes.categoryEducation),
  getRentInfo: () => axios.get(routes.categoryRent),
  getDonationInfo: () => axios.get(routes.categoryDonation),
  getDepositInfo: () => axios.get(routes.categoryDeposit),
  getSavingsInfo: () => axios.get(routes.categorySaving),
  getStockInfo: () => axios.get(routes.categoryStock),
  getLoanInfo: () => axios.get(routes.categoryLoan),
  getRealestateInfo: () => axios.get(routes.categoryRealestate),
};

export default api;
