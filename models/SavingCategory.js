import mongoose from "mongoose";

export const SavingCategorySchema = new mongoose.Schema({
    isDeposit: { type: Boolean, required: true, default: false },
    isSavings: { type: Boolean, required: true, default: false },
    isStock: { type: Boolean, required: true, default: false },
    isLoan: { type: Boolean, required: true, default: false },
    isHousing: { type: Boolean, required: true, default: false }
});

const model = mongoose.model("SavingCategory", SavingCategorySchema);