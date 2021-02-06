import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import payingReducer from "./paying_reducer";
import savingReducer from "./saving_reducer";
import savingGoalReducer from "./savingGoal_reducer";

const rootReducer = combineReducers({
  userReducer,
  payingReducer,
  savingReducer,
  savingGoalReducer,
});

export default rootReducer;
