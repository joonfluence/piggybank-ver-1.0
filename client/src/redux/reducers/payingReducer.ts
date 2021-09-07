import {
  CREATE_PAYING,
  READ_PAYING,
  UPDATE_PAYING,
  DELETE_PAYING,
  MONTH_PAYING,
  CATEGORY_PAYING,
} from "../types";

// 관리할 States : 날짜, 제목, 메모, 가격, 카테고리

const initialState = {
  monthlyPaying: 0,
  payingSum: 0,
  payingList: [],
  categorySum: 0,
};

const payingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PAYING:
      return { ...state, CreateSuccess: action.payload };
    case READ_PAYING:
      return {
        ...state,
        ReadSuccess: action.success,
        payingList: action.payingList,
      };
    case UPDATE_PAYING:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_PAYING:
      return { ...state, DeleteSuccess: action.payload };
    case MONTH_PAYING:
      return {
        ...state,
        monthSuccess: action.monthSuccess,
        payingSum: action.payingSum,
      };
    case CATEGORY_PAYING:
      return {
        ...state,
        categorySum: action.categorySum,
      };
    default:
      return state;
  }
};

export default payingReducer;
