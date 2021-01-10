import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PayingSchema = new Schema({
    category: [{ type: Schema.Types.ObjectId, ref: "PayingCategory"}],
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, required: true, default: Date.now },
    title: { type: String, required: true },
    memo: { type: String },
    price: { type: Number, required: true }
});

const model = mongoose.model("Paying", PayingSchema);
export default model;