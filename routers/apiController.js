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
      const user = await new User({
        email,
        password,
        montlyBudget,
        savingGoal,
      });
      // DB에 유저 정보를 저장한다.
      user.save();
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

// async를 써서, 비동기 콜백을 기다렸다 값을 할당한다.
export const postLogin = async (req, res) => {
  const { email, password, passwordConfirm } = req.body;
  try {
    if (password === passwordConfirm) {
      // DB에서 해당 이메일로 저장된 정보를 조회한다.
      const user = await User.findOne({ email });
      user.comparePassword(password, (err, isMatch) => {
        if (err) return res.json(err);
        if (!isMatch) {
          return res.json({
            LoginSucess: false,
            message: "비밀번호가 서로 다릅니다",
          });
        }
        // 토큰을 생성하여,
        user.generateToken();
        return res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ LoginSucess: true, userId: user._id, jwt: user.token });
      });
    } else {
      return res.json({
        LoginSucess: false,
        message: "비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    throw err;
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
