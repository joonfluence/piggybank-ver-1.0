import {
  CREATE_SAVING_GOAL,
  UPDATE_SAVING_GOAL,
  DELETE_SAVING_GOAL,
} from "../types";

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

const savingGoalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SAVING_GOAL:
      return;
    case UPDATE_SAVING_GOAL:
      return;
    case DELETE_SAVING_GOAL:
      return;
    default:
      return state;
  }
};

export default savingGoalReducer;
