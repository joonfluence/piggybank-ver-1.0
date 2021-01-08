import mongoose from "mongoose";
import savingSchema from "./Saving.js";
import payingSchema from "./Paying.js";

const userSchema = new mongoose.Schema({
    name: { type : String, required: true, unique: true, lowercase: true },
    id: { type : String, required: true },
    password: { type: Number, required: true },
    montlyBudget: { type: Number, required: true },
    savingGoal: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    saving: savingSchema,
    paying: payingSchema
});

export default userSchema;