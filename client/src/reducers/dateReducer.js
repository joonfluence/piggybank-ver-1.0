import { CREATE_DATE, UPDATE_DATE } from "../types";

const initialState = {
  yearInfo: new Date().getFullYear(),
  monthInfo: new Date().getMonth() + 1,
};

function dateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DATE:
      return {
        ...state,
        yearInfo: action.yearInfo,
        monthInfo: action.monthInfo,
        CreateSuccess: action.payload.monthSuccess,
      };
    case UPDATE_DATE:
      return {
        ...state,
        yearInfo: action.payload.yearInfo,
        monthInfo: action.payload.monthInfo,
      };
    default:
      return state;
  }
}

export default dateReducer;
