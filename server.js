import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routers/apiRouter.js";
import cookieParser from "cookie-parser";
import routes from "./routes.js";

const app = express();

app.use(morgan("dev"));
console.log("check");
app.use(
  cors({
    // frontend-server의 url으로 설정해줄 것.
    // origin: "https://piggybanks.netlify.app",
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes.api, apiRouter);

export default app;
