import { CREATE_SAVING, UPDATE_SAVING, DELETE_SAVING } from "../types";

const savingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SAVING:
      return;
    case UPDATE_SAVING:
      return;
    case DELETE_SAVING:
      return;
    default:
      return state;
  }
};

export default savingReducer;
