import express from "express";
import { getPayingInfo, postPayingInfo, getUserInfo, editUserInfo, getSavingInfo, getSavingDetail, getPayingDetail } from "../controllers/userController.js";

const apiRouter = express.Router();

apiRouter.get("/", getPayingInfo);
apiRouter.post("/", postPayingInfo);
apiRouter.get("/myPage", getUserInfo);
apiRouter.post("/mypage/edit/:id", editUserInfo);
apiRouter.get("/saving", getSavingInfo);
apiRouter.get("/savings/:id", getSavingDetail);
apiRouter.get("/consumption/:id", getPayingDetail);

export default apiRouter;