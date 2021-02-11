import { CREATE_BUDGET, UPDATE_BUDGET, DELETE_BUDGET } from "../types";

// 관리할 States : 날짜, 제목, 카테고리, 퍼센테이지, 전체금액, 전체금액에서 카테고리의 금액이 차지하는 비중

const initialState = {
  date: "",
  title: "",
  priceSum: "",
  pricePercentage: "",
  categoryPercentage: "",
  memo: "",
  category: "",
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BUDGET:
      return;
    case UPDATE_BUDGET:
      return;
    case DELETE_BUDGET:
      return;
    default:
      return state;
  }
};

export default budgetReducer;
