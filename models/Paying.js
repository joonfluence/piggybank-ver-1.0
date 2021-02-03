import mongoose from "mongoose";

const Schema = mongoose.Schema;

// paying => 월간 데이터로 산출하고, 일간 정보로 입력 받을 것

const PayingSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  date: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true },
  memo: { type: String },
  price: { type: Number, required: true },
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  budget: [{ type: Schema.Types.ObjectId, ref: "Budget" }],
  category: {
    isGrocery: { type: Boolean },
    isEatOut: { type: Boolean },
    isFashion: { type: Boolean },
    isLiquor: { type: Boolean },
    isTransportaion: { type: Boolean },
    isEducation: { type: Boolean },
    isRent: { type: Boolean },
    isDonation: { type: Boolean },
  },
});

const model = mongoose.model("Paying", PayingSchema);
export default model;
