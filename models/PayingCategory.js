import mongoose from "mongoose";

export const PayingCategorySchema = new mongoose.Schema({
  isGrocery: { type: Boolean, required: true, default: false },
  isEatOut: { type: Boolean, required: true, default: false },
  isFashion: { type: Boolean, required: true, default: false },
  isLiquor: { type: Boolean, required: true, default: false },
  isTransportaion: { type: Boolean, required: true, default: false },
  isEducation: { type: Boolean, required: true, default: false },
  isRent: { type: Boolean, required: true, default: false },
  isDonation: { type: Boolean, required: true, default: false },
});

const model = mongoose.model("PayingCategory", PayingCategorySchema);
export default model;
