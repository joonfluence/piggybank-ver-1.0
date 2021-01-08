import mongoose from "mongoose";
import { savingCategorySchema } from "./Category.js";

const savingSchema = new mongoose.Schema({
    category: savingCategorySchema,
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true }
});

export default savingSchema;