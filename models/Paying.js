import mongoose from "mongoose";

const Schema = mongoose.Schema;

// paying => 월간 데이터로 산출하고, 일간 정보로 입력 받을 것

const PayingSchema = new Schema({
  category: [{ type: Schema.Types.ObjectId, ref: "PayingCategory" }],
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true },
  memo: { type: String },
  price: { type: Number, required: true },
});

const model = mongoose.model("Paying", PayingSchema);
export default model;
