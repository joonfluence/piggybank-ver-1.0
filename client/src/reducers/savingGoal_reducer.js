import {
  CREATE_SAVING_GOAL,
  UPDATE_SAVING_GOAL,
  DELETE_SAVING_GOAL,
} from "../types";

const savingGoalReducer = (state = {}, action) => {
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
