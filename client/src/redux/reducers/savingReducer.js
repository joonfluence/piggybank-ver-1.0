import {
  CREATE_SAVING,
  READ_SAVING,
  UPDATE_SAVING,
  DELETE_SAVING,
  MONTH_SAVING,
  CATEGORY_SAVING,
} from "../types";

const initialState = {
  monthlySaving: 0,
  savingSum: 0,
  savingList: [],
};

const savingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SAVING:
      return { ...state, CreateSuccess: action.payload };
    case READ_SAVING:
      return {
        ...state,
        savingList: action.savingList,
        ReadSuccess: action.success,
      };
    case UPDATE_SAVING:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_SAVING:
      return { ...state, payload: action.payload };
    case MONTH_SAVING:
      return {
        ...state,
        monthlySaving: action.monthlySaving,
        savingSum: action.savingSum,
        monthSuccess: action.monthSuccess,
      };
    case CATEGORY_SAVING:
      return {
        ...state,
        payload: action.payload.data,
        categorySum: action.categorySum,
      };
    default:
      return state;
  }
};

export default savingReducer;
