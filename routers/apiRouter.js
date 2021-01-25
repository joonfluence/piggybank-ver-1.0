import express from "express";
import {
  getPayingInfo,
  postPayingInfo,
  getUserInfo,
  editUserInfo,
  getSavingInfo,
  getSavingDetail,
  getPayingDetail,
  postJoin,
  postLogin,
} from "./apiController.js";

const apiRouter = express.Router();

// 회원가입 및 로그인
apiRouter.post("/users/join", postJoin);
apiRouter.post("/users/login", postLogin);

apiRouter.get("/", getPayingInfo);
apiRouter.post("/", postPayingInfo);
apiRouter.get("/myPage", getUserInfo);
apiRouter.post("/mypage/edit/:id", editUserInfo);
apiRouter.get("/saving", getSavingInfo);
apiRouter.get("/savings/:id", getSavingDetail);
apiRouter.get("/consumption/:id", getPayingDetail);

export default apiRouter;
