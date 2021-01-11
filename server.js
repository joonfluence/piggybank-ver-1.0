import bodyParser, { urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter.js";
import routes from "./routes.js";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes.api, apiRouter);

export default app;
