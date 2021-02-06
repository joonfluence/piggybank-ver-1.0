import { CREATE_PAYING, UPDATE_PAYING, DELETE_PAYING } from "../types";

const paying_reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PAYING:
      return;
    case UPDATE_PAYING:
      return;
    case DELETE_PAYING:
      return;
    default:
      return state;
  }
};

export default paying_reducer;
