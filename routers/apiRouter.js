import express from "express";
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
  getPayingMonth,
} from "../controllers/PayController.js";
import {
  postSavingInfo,
  getSavingDetail,
  getSavingInfo,
  editSavingInfo,
  deleteSavingInfo,
  getSavingMonth,
} from "../controllers/SaveController.js";
import {
  getPayingCategory,
  getSavingCategory,
} from "../controllers/CategoryController.js";
import {
  getBudgetInfo,
  postBudgetInfo,
  editBudgetInfo,
  getBudgetDetail,
  getBudgetMonth,
  deleteBudgetInfo,
} from "../controllers/BudgetController.js";
import {
  getGoalInfo,
  postGoalInfo,
  editGoalInfo,
  getGoalDetail,
  getGoalMonth,
  deleteGoalInfo,
} from "../controllers/SavingGoalController.js";
import routes from "../routes.js";

const apiRouter = express.Router();

// 1) 회원가입 및 로그인, 로그아웃
apiRouter.post(routes.join, postJoin);
apiRouter.post(routes.login, postLogin);
apiRouter.get(routes.logout, getLogOut);

// 2) 인증체크
apiRouter.get(routes.auth, getAuth);

// 3) 사용자 정보
apiRouter.get(routes.mypage, getUserInfo);
apiRouter.put(routes.mypage, editUserInfo);

// 4) 소비정보 CRUD
apiRouter.get(routes.paying, getPayingInfo);
apiRouter.post(routes.paying, postPayingInfo);
apiRouter.put(routes.payings(), editPayingInfo);
apiRouter.delete(routes.payings(), deletePayingInfo);

// 5) 저축정보 CRUD
apiRouter.get(routes.saving, getSavingInfo);
apiRouter.post(routes.saving, postSavingInfo);
apiRouter.put(routes.savings(), editSavingInfo);
apiRouter.delete(routes.savings(), deleteSavingInfo);

// 6) 디테일 정보
apiRouter.post(routes.payingMonth, getPayingMonth);
apiRouter.post(routes.savingMonth, getSavingMonth);
apiRouter.get(routes.payings(), getPayingDetail);
apiRouter.get(routes.savings(), getSavingDetail);

// 7) 소비 & 저축 카테고리별 정보
apiRouter.post(routes.categoryPaying, getPayingCategory);
apiRouter.post(routes.categorySaving, getSavingCategory);

// 8) 예산 정보
apiRouter.get(routes.budget, getBudgetInfo);
apiRouter.post(routes.budget, postBudgetInfo);
apiRouter.put(routes.budgets(), editBudgetInfo);
apiRouter.delete(routes.budgets(), deleteBudgetInfo);
apiRouter.get(routes.budgets(), getBudgetDetail);
apiRouter.post(routes.budgetMonth, getBudgetMonth);

// 9) 저축 목표 정보
apiRouter.get(routes.savingGoal, getGoalInfo);
apiRouter.post(routes.savingGoal, postGoalInfo);
apiRouter.put(routes.savingGoals(), editGoalInfo);
apiRouter.get(routes.savingGoals(), getGoalDetail);
apiRouter.delete(routes.savingGoals(), deleteGoalInfo);
apiRouter.post(routes.savingGoalMonth, getGoalMonth);

export default apiRouter;
