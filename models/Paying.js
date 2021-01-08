import mongoose from "mongoose";
import { PayingCategorySchema } from "./PayingCategory.js";

const PayingSchema = new mongoose.Schema({
    category: PayingCategorySchema,
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true }
});

const model = mongoose.model("Paying", PayingSchema);
export default PayingSchema;