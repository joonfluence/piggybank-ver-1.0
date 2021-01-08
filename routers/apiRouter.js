import express from "express";
import { getUserInfo } from "../controllers/userController.js";

const apiRouter = express.Router();

apiRouter.get("/hello", getUserInfo);

export default apiRouter;