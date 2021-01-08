import mongoose from "mongoose";
import SavingSchema from "./Saving.js";
import payingSchema from "./Paying.js";

const UserSchema = new mongoose.Schema({
    name: { type : String, required: true, unique: true, lowercase: true },
    id: { type : String, required: true },
    password: { type: Number, required: true },
    montlyBudget: { type: Number, required: true },
    savingGoal: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    saving: SavingSchema,
    paying: payingSchema
});

const model = mongoose.model("User", UserSchema);
export default UserSchema;