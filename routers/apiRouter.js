import express from "express";
import { getUserInfo } from "../controllers/userController.js";

const apiRouter = express.Router();

apiRouter.get("/", getUserInfo);
apiRouter.get("/myPage");
apiRouter.get("/saving");
apiRouter.get("/savings/:id", );
apiRouter.get("/consumption/:id", );

export default apiRouter;