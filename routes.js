const HOME = "/";
const API = "/api";

// Users

const USER_JOIN = "/users/join";
const USER_LOGIN = "/users/login";
const USER_LOGOUT = "/users/logout";
const USER_AUTH = "/users/auth";

// My space

const MYPAGE = "/mypage/:id";

// Payings

const PAYING = "/payings";
const PAYING_DETAIL = "/payings/:id";
const PAYING_MONTH = "/payings/month";
const CATEGORY_PAYING = "/payings/category";

// Savings

const SAVING = "/savings";
const SAVING_DETAIL = "/savings/:id";
const SAVING_MONTH = "/savings/month";
const CATEGORY_SAVING = "/savings/category";

// 예산 카테고리

const BUDGET = "/budgets";
const BUDGET_DETAIL = "/budgets/:id";
const BUDGET_MONTH = "/budgets/month";

// 저축 목표 카테고리

const SAVING_GOAL = "/savingsGoal";
const SAVING_GOAL_DETAIL = "/savingsGoal/:id";
const SAVING_GOAL_MONTH = "/savingsGoal/month";

const routes = {
  home: HOME,
  api: API,
  saving: SAVING,
  savings: (id) => {
    if (id) {
      return `/savings/${id}`;
    } else {
      return SAVING_DETAIL;
    }
  },
  payingMonth: PAYING_MONTH,
  savingMonth: SAVING_MONTH,
  paying: PAYING,
  payings: (id) => {
    if (id) {
      return `/payings/${id}`;
    } else {
      return PAYING_DETAIL;
    }
  },
  join: USER_JOIN,
  login: USER_LOGIN,
  logout: USER_LOGOUT,
  auth: USER_AUTH,
  mypage: (id) => {
    if (id) {
      return `/mypage/${id}`;
    } else {
      return MYPAGE;
    }
  },
  categoryPaying: (category) => {
    if (category) {
      return `/payings`;
    } else {
      return CATEGORY_PAYING;
    }
  },
  categorySaving: (category) => {
    if (category) {
      return `/savings/${category}`;
    } else {
      return CATEGORY_SAVING;
    }
  },
  budget: BUDGET,
  budgets: (id) => {
    if (id) {
      return `budgets/:id`;
    } else {
      return BUDGET_DETAIL;
    }
  },
  budgetMonth: BUDGET_MONTH,
  savingGoal: SAVING_GOAL,
  savingGoals: (id) => {
    if (id) {
      return `/savingsGoal/:id`;
    } else {
      return SAVING_GOAL_DETAIL;
    }
  },
  savingGoalMonth: SAVING_GOAL_MONTH,
};
export default routes;
