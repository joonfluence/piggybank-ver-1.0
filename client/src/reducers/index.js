import { combineReducers } from "redux";
import userReducer from "./userReducer";
import payingReducer from "./payingReducer";
import savingReducer from "./savingReducer";
import savingGoalReducer from "./savingGoalReducer";
import budgetReducer from "./budgetReducer";
import dateReducer from "./dateReducer";
import testReducer from "../hoc/test";

const rootReducer = combineReducers({
  userReducer,
  payingReducer,
  savingReducer,
  savingGoalReducer,
  budgetReducer,
  dateReducer,
  testReducer,
});

export default rootReducer;
