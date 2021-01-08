import mongoose from "mongoose";
import { payingCategorySchema } from "./Category.js";

const payingSchema = new mongoose.Schema({
    category: payingCategorySchema,
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true }
});

export default payingSchema;