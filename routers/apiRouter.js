import express from "express";
import { Auth } from "../middlewares.js";
import {
  editUserInfo,
  getUserInfo,
  postJoin,
  postLogin,
  getLogOut,
  getAuth,
} from "../controllers/UserController";
import {
  getPayingInfo,
  postPayingInfo,
  getPayingDetail,
  editPayingInfo,
  deletePayingInfo,
} from "../controllers/PayController";
import {
  postSavingInfo,
  getSavingDetail,
  getSavingInfo,
  editSavingInfo,
} from "../controllers/SaveController";
import {
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
} from "../controllers/CategoryController";
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
apiRouter.get(routes.paying, Auth, getPayingInfo);
apiRouter.post(routes.paying, Auth, postPayingInfo);
apiRouter.put(routes.payings(), Auth, editPayingInfo);
apiRouter.delete(routes.payings(), Auth, deletePayingInfo);

// 5) 저축정보 CRUD
apiRouter.get(routes.saving, Auth, getSavingInfo);
apiRouter.post(routes.saving, Auth, postSavingInfo);
apiRouter.put(routes.savings(), Auth, editSavingInfo);
apiRouter.delete(routes.savings(), Auth, deletePayingInfo);

// 6) 디테일 정보
apiRouter.get(routes.payings(), Auth, getPayingDetail);
apiRouter.get(routes.savings(), Auth, getSavingDetail);

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

// 월별 라우터가 추가되어야 할 것 같음.

export default apiRouter;
