import express from "express";
import { Auth } from "../middlewares.js";
import {
  editUserInfo,
  getUserInfo,
  postJoin,
  postLogin,
  getLogOut,
  getAuth,
} from "../controllers/UserController.js";
import {
  getPayingInfo,
  postPayingInfo,
  getPayingDetail,
  editPayingInfo,
  deletePayingInfo,
} from "../controllers/PayController.js";
import {
  postSavingInfo,
  getSavingDetail,
  getSavingInfo,
  editSavingInfo,
  deleteSavingInfo,
} from "../controllers/SaveController.js";
import {
  getPayingCategory,
  getPayingCategoryMonth,
  getSavingCategory,
  getSavingCategoryMonth,
} from "../controllers/CategoryController.js";
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
apiRouter.delete(routes.savings(), Auth, deleteSavingInfo);

// 6) 디테일 정보
apiRouter.get(routes.payings(), Auth, getPayingDetail);
apiRouter.get(routes.savings(), Auth, getSavingDetail);

// 7) 소비 카테고리별 정보
apiRouter.get(routes.categoryPaying(), getPayingCategory);
apiRouter.get(routes.categoryPayingMonth(), getPayingCategoryMonth);

// 8) 저축 카테고리별 정보
apiRouter.get(routes.categorySaving(), getSavingCategory);
apiRouter.get(routes.categorySavingMonth(), getSavingCategoryMonth);

export default apiRouter;
