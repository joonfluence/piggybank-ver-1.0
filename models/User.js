import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  montlyBudget: { type: Number, required: true },
  savingGoal: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  saving: [{ type: Schema.Types.ObjectId, ref: "Saving" }],
  paying: [{ type: Schema.Types.ObjectId, ref: "Paying" }],
});

UserSchema.pre("save", function (next) {
  let user = this; // user에 userShcema를 할당함

  // 비밀번호를 입력한 경우 혹은 비밀번호를 변경할 경우 실행
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        // 회원가입, 비밀번호 변경 => user.save()를 실행
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.method.comparePassword = function (plainPassword) {
  let user = this;
  bcrypt.compare(plainPassword, user.password, function (err, result) {
    return result;
  });
};

const model = mongoose.model("User", UserSchema);
export default model;
