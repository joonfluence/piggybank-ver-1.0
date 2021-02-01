import express from "express";
import { Auth } from "../middlewares.js";
import {
  getPayingInfo,
  postPayingInfo,
  getUserInfo,
  editUserInfo,
  getSavingInfo,
  getSavingDetail,
  getPayingDetail,
  postJoin,
  postLogin,
  getLogOut,
  getAuth,
  editPayingInfo,
  postSavingInfo,
  deletePayingInfo,
  editSavingInfo,
  getEatOutInfo,
  getGroceryInfo,
  getFashionInfo,
  getLiquorInfo,
  getTransporInfo,
  getEducationInfo,
  getRentInfo,
  getDonationInfo,
  getSavingsInfo,
  getDepositInfo,
  getStockInfo,
  getLoanInfo,
  getRealestateInfo,
} from "./apiController.js";
import routes from "../routes.js";

const apiRouter = express.Router();

// 1) 회원가입 및 로그인, 로그아웃
apiRouter.post(routes.join, postJoin);
apiRouter.post(routes.login, postLogin);
apiRouter.get(routes.logout, Auth, getLogOut);

// 2) 인증체크
apiRouter.get(routes.auth, Auth, getAuth);

// 3) 사용자 정보
apiRouter.get(routes.mypage(), getUserInfo);
apiRouter.post(routes.editMypage(), editUserInfo);

// 4) 소비정보 CRUD
apiRouter.get(routes.paying, getPayingInfo);
apiRouter.post(routes.postPaying(), postPayingInfo);
apiRouter.post(routes.editPaying(), editPayingInfo);
apiRouter.get(routes.deletePaying(), deletePayingInfo);

// 5) 저축정보 CRUD
apiRouter.get(routes.saving, getSavingInfo);
apiRouter.post(routes.postSaving(), postSavingInfo);
apiRouter.post(routes.editSaving(), editSavingInfo);
apiRouter.get(routes.deleteSaving(), deletePayingInfo);

// 6) 디테일 정보
apiRouter.get(routes.payings(), getPayingDetail);
apiRouter.get(routes.savings(), getSavingDetail);

// 7) 소비 카테고리별 정보
apiRouter.get(routes.categoryEatout, getEatOutInfo);
apiRouter.get(routes.categoryGrocery, getGroceryInfo);
apiRouter.get(routes.categoryFashion, getFashionInfo);
apiRouter.get(routes.categoryLiqour, getLiquorInfo);
apiRouter.get(routes.categoryTransportation, getTransporInfo);
apiRouter.get(routes.categoryEducation, getEducationInfo);
apiRouter.get(routes.categoryRent, getRentInfo);
apiRouter.get(routes.categoryDonation, getDonationInfo);

// 8) 저축 카테고리별 정보
apiRouter.get(routes.categorySaving, getSavingsInfo);
apiRouter.get(routes.categoryDeposit, getDepositInfo);
apiRouter.get(routes.categoryStock, getStockInfo);
apiRouter.get(routes.categoryLoan, getLoanInfo);
apiRouter.get(routes.categoryRealestate, getRealestateInfo);

export default apiRouter;
