import bodyParser, { urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Global Router

app.get("/", (req, res) => res.send("consumption!"));
app.get("/join", (req, res) => res.send({message: "join"}));
app.get("/login", (req, res) => res.send({message: "login!"}));
app.get("/logout", (req, res) => res.send("login!"));

// User Router

app.get("/user", (req, res) => res.send("user!"));
app.get("/user/:id", (req, res) => res.send("user-page!"));
app.get("/user/edit-profile", (req, res) => res.send("edit-profile!"));
app.get("/user/change-password", (req, res) => res.send("change-password!"));

// Saving Router

app.get("/saving", (req, res) => res.send("saving!"));

app.get("/api/hello", (req, res) => res.send({
    message: "Hello, this is Chris"
}));

export default app;
