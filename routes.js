const HOME = "/";
const API = "/api";

// Users

const USER_JOIN = "/users/join";
const USER_LOGIN = "/users/login";
const USER_LOGOUT = "/users/logout";
const USER_AUTH = "/users/auth";

// My space

const MYPAGE = "/mypage/:id";
const MYPAGE_EDIT = "/mypage/:id/edit";

// Payings

const PAYING = "/payings";
const PAYING_DETAIL = "/payings/:id";
const PAYING_MONTH = "/payings/:year/:month";
const CATEGORY_PAYING = "/payings/:category";

// Savings

const SAVING = "/savings";
const SAVING_DETAIL = "/savings/:id";
const SAVING_MONTH = "/savings/:year/:month";
const CATEGORY_SAVING = "/savings/:category";

// 예산 카테고리

const BUDGET = "/budgets";
const BUDGET_DETAIL = "/budgets/:id";
const BUDGET_MONTH = "/budgets/:year/:month";

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
  payingMonth: (year, month) => {
    if (year && month) {
      return `/payings/${year}/${month}`;
    } else {
      return PAYING_MONTH;
    }
  },
  savingMonth: (year, month) => {
    if (year && month) {
      return `/savings/${year}/${month}`;
    } else {
      return SAVING_MONTH;
    }
  },
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
  editMypage: (id) => {
    if (id) {
      return `/mypage/${id}/edit`;
    } else {
      return MYPAGE_EDIT;
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
  budgetMonth: (year, month) => {
    if (year && month) {
      return `/budgets/${year}/${month}`;
    } else {
      return BUDGET_MONTH;
    }
  },
};
export default routes;
