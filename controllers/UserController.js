import User from "../models/User.js";

// 1) 유저 관련 (Join, Login, Logout) Controllers
export const postJoin = async (req, res) => {
  const { name, id, email, password, passwordConfirm } = req.body;
  try {
    // 입력한 비밀번호가 서로 같을 경우에만 가입할 수 있다.
    console.log(req.body);
    if (password === passwordConfirm) {
      const user = await new User({
        name,
        id,
        email,
        password,
      });
      // DB에 유저 정보를 저장한다.
      user.save();
      return res.status(201).json({
        joinSucess: true,
      });
    } else {
      return res.status(500).json({
        joinSuccess: false,
        message: "비밀번호가 서로 다릅니다",
      });
    }
  } catch (err) {
    // 예외처리 1) 이메일이 중복됐을 경우
    if (err.keyPattern) {
      return res.status(500).json({
        joinSucess: false,
        errorMessage: "이메일이 중복됩니다.",
      });
    }
    console.log("error: " + error);
    throw err;
  } finally {
  }
};

// async를 써서, 비동기 콜백을 기다렸다 값을 할당한다.
export const postLogin = async (req, res) => {
  const { id, password } = req.body;
  try {
    // DB에서 해당 이메일로 저장된 정보를 조회한다.
    const user = await User.findOne({ id });
    user.comparePassword(password, (err, isMatch) => {
      if (err) return res.json(err);
      if (!isMatch) {
        return res.json({
          LoginSuccess: false,
          message: "비밀번호가 틀립니다",
        });
      } else {
        // 토큰을 생성하여, 쿠키에 저장해줄 것.
        user.generateToken();
        res.setHeader(
          "Set-Cookie",
          `x_auth=${user.token}; maxAge: 86400000,
        httpOnly: true, Secure; SameSite=None`
        );
        // res.cookie("x_auth", user.token, {
        //   maxAge: 86400000,
        //   httpOnly: true,
        //   SameSite: "None",
        //   Secure,
        // });
        return res.status(200).json({
          LoginSuccess: true,
          userId: user._id,
          jwt: user.token,
          isAuth: true,
        });
      }
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getLogOut = (req, res) => {
  try {
    User.findByIdAndUpdate(req.user._id, { token: "" });
    res.cookie("x_auth", "");
    return res.status(200).send({
      LogOutSuccess: true,
      userId: "",
      isAuth: false,
    });
  } catch (err) {
    return res.json({ LoginSuccess: false, err });
  }
};

// 2) 사용자 인증 처리 Controllers
export const getAuth = (req, res) => {
  return res.status(200).json({
    success: true,
    _id: req.user._id,
    isAuth: true,
  });
};

// 5) 사용자정보 RU Controller

export const getUserInfo = (req, res) => res.send("getUserInfo");
export const editUserInfo = (req, res) => res.send("editUserInfo");
