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
const PAYING_MONTH = "/payings/:month";

// Savings

const SAVING = "/savings";
const SAVING_MONTH = "/payings/:month";

// Details

const PAYING_DETAIL = "/payings/:id";
const SAVING_DETAIL = "/savings/:id";

// 소비 카테고리

const CATEGORY_PAYING = "/payings/:category";
const CATEGORY_PAYING_MONTH = "/payings/:category/:month";

// 저축 카테고리

const CATEGORY_SAVING = "/savings/:category";
const CATEGORY_SAVING_MONTH = "/savings/:category/:month";

// 저축 카테고리

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
  payingMonth: (month) => {
    if (month) {
      return `/payings/${month}`;
    } else {
      return PAYING_MONTH;
    }
  },
  savingMonth: (month) => {
    if (month) {
      return `/savings/${month}`;
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
  categoryPayingMonth: (category, month) => {
    if ((category, month)) {
      return `/payings/${category}/${month}`;
    } else {
      return CATEGORY_PAYING_MONTH;
    }
  },
  categorySaving: (category) => {
    if (category) {
      return `/savings/${category}`;
    } else {
      return CATEGORY_SAVING;
    }
  },
  categorySavingMonth: (category, month) => {
    if ((category, month)) {
      return `/savings/${category}/${month}`;
    } else {
      return CATEGORY_SAVING_MONTH;
    }
  },
};
export default routes;
