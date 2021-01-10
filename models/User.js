import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type : String, required: true, unique: true, lowercase: true },
    userId: { type : String, required: true },
    email : { type : String, required: true },
    password: { type: Number, required: true },
    montlyBudget: { type: Number, required: true },
    savingGoal: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    saving: [{ type: Schema.Types.ObjectId, ref: "Saving" }],
    paying: [{ type: Schema.Types.ObjectId, ref: "Paying" }]
});

const model = mongoose.model("User", UserSchema);
export default model;