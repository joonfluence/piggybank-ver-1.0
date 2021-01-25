import User from "../models/User.js";

export const postJoin = async (req, res) => {
  const {
    email,
    password,
    passwordConfirm,
    montlyBudget,
    savingGoal,
  } = req.body;
  try {
    // 입력한 비밀번호가 서로 같을 경우에만 가입할 수 있다.
    if (password === passwordConfirm) {
      const user = new User({
        email,
        password,
        montlyBudget,
        savingGoal,
      });
      // DB에 유저 정보를 저장한다.
      await user.save();
      return res.json({
        joinSucess: true,
      });
    } else {
      return res.json({
        joinSucess: false,
        message: "비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    // 예외처리 1) 이메일이 중복됐을 경우
    if (err.keyPattern) {
      return res.json({
        joinSucess: false,
        errorMessage: "이메일이 중복됩니다.",
      });
    }
    return res.json(err);
  }
};

export const postLogin = (req, res) => {
  const { email, password, passwordConfirm } = req.body;
  try {
    if (password === passwordConfirm) {
      // DB에서 해당 이메일로 저장된 정보를 조회한다.
      const user = User.findOne({
        email,
      });
      const isMatch = user.comparePassword(password);
      if (isMatch) {
        return res.json({
          LoginSucess: true,
        });
      } else {
        return res.json({
          LoginSucess: false,
          message: "비밀번호가 서로 다릅니다",
        });
      }
    } else {
      return res.json({
        LoginSucess: false,
        message: "비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    return res.json(err);
  }
};

export const getPayingInfo = (req, res) => res.send("getPayingInfo");
export const postPayingInfo = (req, res) => res.send("postPayingInfo");
export const getUserInfo = (req, res) => res.send("getUserInfo");
export const editUserInfo = (req, res) => res.send("editUserInfo");
export const getSavingInfo = (req, res) => res.send("getSavingInfo");
export const postSavingInfo = (req, res) => res.send("PostSavingInfo");
export const getSavingDetail = (req, res) => res.send("getSavingDetail");
export const getPayingDetail = (req, res) => res.send("getPayingDetail");
