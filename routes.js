// Users

const USER_JOIN = "/users/join";
const USER_LOGIN = "/users/login";
const USER_LOGOUT = "/users/logout";
const USER_AUTH = "/users/auth";

// My space

const MYPAGE = "/mypage/:id";
const MYPAGE_EDIT = "/mypage/:id/edit";

// Payings

const PAYING = "/paying";
const PAYING_POST = "/payings/:id/post";
const PAYING_EDIT = "/payings/:id/edit";
const PAYING_DELETE = "/payings/:id/delete";

// Savings

const SAVING = "/saving";
const SAVING_POST = "/savings/:id/post";
const SAVING_EDIT = "/savings/:id/edit";
const SAVING_DELETE = "/savings/:id/delete";

// Details

const PAYING_DETAIL = "/payings/:id";
const SAVING_DETAIL = "/savings/:id";

// 소비 & 저축 카테고리

const CATEGORY_PAYING_EATOUT = "/category/eatout";
const CATEGORY_PAYING_GROCERY = "/category/grocery";
const CATEGORY_PAYING_FASHION = "/category/fashion";
const CATEGORY_PAYING_LIQUOR = "/category/liquor";
const CATEGORY_PAYING_TRANSPORTAION = "/category/transportation";
const CATEGORY_PAYING_EDUCATION = "/category/education";
const CATEGORY_PAYING_RENT = "/category/rent";
const CATEGORY_PAYING_DONATION = "/category/donation";
const CATEGORY_SAVING_SAVING = "/category/saving";
const CATEGORY_SAVING_DEPOSIT = "/category/deposit";
const CATEGORY_SAVING_STOCK = "/category/stock";
const CATEGORY_SAVING_LOAN = "/category/loan";
const CATEGORY_SAVING_REALESTATE = "/category/realestate";

// 저축 카테고리

export const routes = {
  saving: SAVING,
  postSaving: (id) => {
    if (id) {
      return `/savings/${id}/post`;
    } else {
      return SAVING_POST;
    }
  },
  editSaving: (id) => {
    if (id) {
      return `/savings/${id}/edit`;
    } else {
      return SAVING_EDIT;
    }
  },
  deleteSaving: (id) => {
    if (id) {
      return `/savings/${id}/delete`;
    } else {
      return SAVING_DELETE;
    }
  },
  savings: (id) => {
    if (id) {
      return `/savings/${id}`;
    } else {
      return SAVING_DETAIL;
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
  postPaying: (id) => {
    if (id) {
      return `/payings/${id}/post`;
    } else {
      return PAYING_POST;
    }
  },
  editPaying: (id) => {
    if (id) {
      return `/payings/${id}/edit`;
    } else {
      return PAYING_EDIT;
    }
  },
  deletePaying: (id) => {
    if (id) {
      return `/payings/${id}/delete`;
    } else {
      return PAYING_DELETE;
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
  categoryEatout: CATEGORY_PAYING_EATOUT,
  categoryGrocery: CATEGORY_PAYING_GROCERY,
  categoryFashion: CATEGORY_PAYING_FASHION,
  categoryLiqour: CATEGORY_PAYING_LIQUOR,
  categoryTranportation: CATEGORY_PAYING_TRANSPORTAION,
  categoryEducation: CATEGORY_PAYING_EDUCATION,
  categoryRent: CATEGORY_PAYING_RENT,
  categoryDonation: CATEGORY_PAYING_DONATION,
  categorySaving: CATEGORY_SAVING_SAVING,
  categoryEeposit: CATEGORY_SAVING_DEPOSIT,
  categoryStock: CATEGORY_SAVING_STOCK,
  categoryLoan: CATEGORY_SAVING_LOAN,
  categoryRealestate: CATEGORY_SAVING_REALESTATE,
};
