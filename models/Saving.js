import mongoose from "mongoose";

const Schema = mongoose.Schema;

// saving => 연간 데이터로 산출하고, 월간 정보로 입력 받을 것

const SavingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  date: { type: Date },
  savingGoal: { type: Number },
  title: { type: String },
  memo: { type: String },
  savings: { type: Number },
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  category: {
    isDeposit: { type: Boolean },
    isSavings: { type: Boolean },
    isStock: { type: Boolean },
    isLoan: { type: Boolean },
    isHousing: { type: Boolean },
  },
});

const model = mongoose.model("Saving", SavingSchema);
export default model;
