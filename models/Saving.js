import mongoose from "mongoose";

const Schema = mongoose.Schema;

// saving => 연간 데이터로 산출하고, 월간 정보로 입력 받을 것

const SavingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true },
  memo: { type: String },
  price: { type: Number, required: true },
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
