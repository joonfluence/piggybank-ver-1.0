import { Mongoose } from "mongoose";

import mongoose from "mongoose";

export const payingCategorySchema = new mongoose.Schema({
    isGrocery : { type: Boolean, required: true, default: false },
    isFood : { type: Boolean, required: true, default: false },
    isFashion : { type: Boolean, required: true, default: false },
    isLiquor : { type: Boolean, required: true, default: false },
    isTransportaion : { type: Boolean, required: true, default: false },
    isEducation : { type: Boolean, required: true, default: false },
    isRent : { type: Boolean, required: true, default: false },
    isDonation : { type: Boolean, required: true, default: false }
});

export const savingCategorySchema = new mongoose.Schema({
    isDeposit: { type: Boolean, required: true, default: false },
    isSavings: { type: Boolean, required: true, default: false },
    isStock: { type: Boolean, required: true, default: false },
    isLoan: { type: Boolean, required: true, default: false },
    isHousing: { type: Boolean, required: true, default: false }
});

