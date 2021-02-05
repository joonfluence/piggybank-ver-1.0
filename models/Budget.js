import mongoose from "mongoose";
import getCurrentDate from "../date.js";

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  createdAt: { type: Date, default: getCurrentDate() },
  date: { type: Date, default: getCurrentDate() },
  title: { type: String },
  budget: { type: Number },
  remained: { type: Number }, // budget 값을 어떻게 remained의 default 값으로 설정할 수 있을까?
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const model = mongoose.model("Budget", BudgetSchema);
export default model;
