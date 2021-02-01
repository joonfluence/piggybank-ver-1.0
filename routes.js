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
const PAYING_POST = "/payings/:id/post";
const PAYING_EDIT = "/payings/:id/edit";
const PAYING_DELETE = "/payings/:id/delete";

// Savings

const SAVING = "/savings";
const SAVING_MONTH = "/payings/:month";
const SAVING_POST = "/savings/:id/post";
const SAVING_EDIT = "/savings/:id/edit";
const SAVING_DELETE = "/savings/:id/delete";

// Details

const PAYING_DETAIL = "/payings/:id";
const SAVING_DETAIL = "/savings/:id";

// 소비 카테고리

const CATEGORY_PAYING_EATOUT = "/payings/eatout";
const CATEGORY_PAYING_EATOUT_MONTH = `/payings/eatout/:month`;
const CATEGORY_PAYING_GROCERY = "/payings/grocery";
const CATEGORY_PAYING_GROCERY_MONTH = `/payings/grocery/:month`;
const CATEGORY_PAYING_FASHION = "/payings/fashion";
const CATEGORY_PAYING_FASHION_MONTH = `/payings/fashion/:month`;
const CATEGORY_PAYING_LIQUOR = "/payings/liquor";
const CATEGORY_PAYING_LIQUOR_MONTH = `/payings/liquor/:month`;
const CATEGORY_PAYING_TRANSPORTAION = "/payings/transportation";
const CATEGORY_PAYING_TRANSPORTAION_MONTH = `/payings/transportation/:month`;
const CATEGORY_PAYING_EDUCATION = "/payings/education";
const CATEGORY_PAYING_EDUCATION_MONTH = `/payings/education/:month`;
const CATEGORY_PAYING_RENT = "/payings/rent";
const CATEGORY_PAYING_RENT_MONTH = `/payings/rent/:month`;
const CATEGORY_PAYING_DONATION = "/payings/donation";
const CATEGORY_PAYING_DONATION_MONTH = `/payings/donation/:month`;

// 저축 카테고리

const CATEGORY_SAVING_SAVING = "/savings/saving";
const CATEGORY_SAVING_SAVING_MONTH = `/savings/saving/:month`;
const CATEGORY_SAVING_DEPOSIT = "/savings/deposit";
const CATEGORY_SAVING_DEPOSIT_MONTH = `/savings/deposit/:month`;
const CATEGORY_SAVING_STOCK = "/savings/stock";
const CATEGORY_SAVING_STOCK_MONTH = `/savings/stock/:month`;
const CATEGORY_SAVING_LOAN = "/savings/loan";
const CATEGORY_SAVING_LOAN_MONTH = `/savings/loan/:month`;
const CATEGORY_SAVING_REALESTATE = "/savings/realestate";
const CATEGORY_SAVING_REALESTATE_MONTH = `/savings/realestate/:month`;

// 저축 카테고리

const routes = {
  api: API,
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
  categoryTransportation: CATEGORY_PAYING_TRANSPORTAION,
  categoryEducation: CATEGORY_PAYING_EDUCATION,
  categoryRent: CATEGORY_PAYING_RENT,
  categoryDonation: CATEGORY_PAYING_DONATION,
  categorySaving: CATEGORY_SAVING_SAVING,
  categoryDeposit: CATEGORY_SAVING_DEPOSIT,
  categoryStock: CATEGORY_SAVING_STOCK,
  categoryLoan: CATEGORY_SAVING_LOAN,
  categoryRealestate: CATEGORY_SAVING_REALESTATE,
  categoryEatoutMonth: (month) => {
    if (month) {
      return `payings/eatout/${month}`;
    } else {
      return CATEGORY_PAYING_EATOUT_MONTH;
    }
  },
  categoryGroceryMonth: (month) => {
    if (month) {
      return `payings/grocery/${month}`;
    } else {
      return CATEGORY_PAYING_GROCERY_MONTH;
    }
  },
  categoryFashionMonth: (month) => {
    if (month) {
      return `payings/fashion/${month}`;
    } else {
      return CATEGORY_PAYING_FASHION_MONTH;
    }
  },
  categoryLiquorMonth: (month) => {
    if (month) {
      return `payings/liquor/${month}`;
    } else {
      return CATEGORY_PAYING_LIQUOR_MONTH;
    }
  },
  categoryTransportationMonth: (month) => {
    if (month) {
      return `payings/transportation/${month}`;
    } else {
      return CATEGORY_PAYING_TRANSPORTAION_MONTH;
    }
  },
  categoryEducationMonth: (month) => {
    if (month) {
      return `payings/education/${month}`;
    } else {
      return CATEGORY_PAYING_EDUCATION_MONTH;
    }
  },
  categoryRentMonth: (month) => {
    if (month) {
      return `payings/rent/${month}`;
    } else {
      return CATEGORY_PAYING_RENT_MONTH;
    }
  },
  categoryDonationMonth: (month) => {
    if (month) {
      return `payings/donation/${month}`;
    } else {
      return CATEGORY_PAYING_DONATION_MONTH;
    }
  },
  categorySavingMonth: (month) => {
    if (month) {
      return `savings/saving/${month}`;
    } else {
      return CATEGORY_SAVING_SAVING_MONTH;
    }
  },
  categoryDepositMonth: (month) => {
    if (month) {
      return `savings/deposit/${month}`;
    } else {
      return CATEGORY_SAVING_DEPOSIT_MONTH;
    }
  },
  categoryStockMonth: (month) => {
    if (month) {
      return `savings/stock/${month}`;
    } else {
      return CATEGORY_SAVING_STOCK_MONTH;
    }
  },
  categoryLoanMonth: (month) => {
    if (month) {
      return `savings/loan/${month}`;
    } else {
      return CATEGORY_SAVING_LOAN_MONTH;
    }
  },
  categoryRealestateMonth: (month) => {
    if (month) {
      return `savings/realestate/${month}`;
    } else {
      return CATEGORY_SAVING_REALESTATE_MONTH;
    }
  },
};
export default routes;
