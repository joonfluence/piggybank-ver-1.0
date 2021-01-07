import bodyParser, { urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("consumption!"));
app.get("/user", (req, res) => res.send("user!"));
app.get("/login", (req, res) => res.send("login!"));
app.get("/saving", (req, res) => res.send("saving!"));
app.get("/api/hello", (req, res) => res.send({
    message: "Hello, this is Chris"
}));

app.listen(5000, () => console.log("✅Listening on : http://localhost:5000"));

export default app;
