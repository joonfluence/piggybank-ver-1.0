import {
  CREATE_BUDGET,
  READ_BUDGET,
  UPDATE_BUDGET,
  DELETE_BUDGET,
  MONTH_BUDGET,
} from "../types";

// 관리할 States : 날짜, 제목, 액수, 카테고리, 퍼센테이지, 전체금액, 전체금액에서 카테고리의 금액이 차지하는 비중

const initialState = {
  date: new Date("2021", "02", "13"),
  title: "식비",
  price: 20000,
  memo: "아무 메모",
  budgetSum: 0,
  categorySum: 0,
};

// date, title, budget, monthlyBudget, budgetSum, pricePercentage, categoryPercentage, category

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUDGET:
      return { ...state, CreateSuccess: action.payload };
    case READ_BUDGET:
      return { ...state, ReadSuccess: action.payload };
    case UPDATE_BUDGET:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_BUDGET:
      return { ...state, DeleteSuccess: action.payload };
    case MONTH_BUDGET:
      return {
        ...state,
        monthInfoSuccess: action.payload,
        budgetSum: action.payload.budgetSum,
        categorySum: action.payload.categorySum,
        date: action.payload.categoryBudget.date,
        title: action.payload.categoryBudget.title,
        budget: action.payload.categoryBudget.budget,
        memo: action.payload.categoryBudget.memo,
      };
    default:
      return state;
  }
};

export default budgetReducer;
