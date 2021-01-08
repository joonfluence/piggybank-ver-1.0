import mongoose from "mongoose";
import { SavingCategorySchema } from "./SavingCategory.js";

const SavingSchema = new mongoose.Schema({
    category: SavingCategorySchema,
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true }
});

const model = mongoose.model("Saving", SavingSchema);
export default SavingSchema;