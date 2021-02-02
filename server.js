import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter.js";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import globalRouter from "./routers/globalRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(routes.home, globalRouter);
app.use(routes.api, apiRouter);

export default app;
