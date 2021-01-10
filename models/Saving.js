import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SavingSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: "SavingCategory" }]
});

const model = mongoose.model("Saving", SavingSchema);
export default model;