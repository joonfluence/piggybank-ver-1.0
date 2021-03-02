import {
  CREATE_SAVING,
  READ_SAVING,
  UPDATE_SAVING,
  DELETE_SAVING,
  MONTH_SAVING,
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
      return { ...state, ReadSuccess: action.payload };
    case UPDATE_SAVING:
      return { ...state, UpdateSuccess: action.payload };
    case DELETE_SAVING:
      return { ...state, DeleteSuccess: action.payload };
    case MONTH_SAVING:
      return {
        ...state,
        monthlySaving: action.monthlySaving,
        savingSum: action.savingSum,
        monthSuccess: action.monthSuccess,
      };
    default:
      return state;
  }
};

export default savingReducer;
