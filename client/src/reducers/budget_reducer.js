import { CREATE_BUDGET, UPDATE_BUDGET, DELETE_BUDGET } from "../types";

const budgetReducer = (state = {}, action) => {
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
