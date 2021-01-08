import express from "express";
import { getHome } from "../controllers/userController.js";
import routes from "../routes.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

export default globalRouter;