import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  date: { type: Date },
  title: { type: String },
  budget: { type: Number },
  remained: { type: Number }, // budget 값을 어떻게 remained의 default 값으로 설정할 수 있을까?
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
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const model = mongoose.model("Budget", BudgetSchema);
export default model;
