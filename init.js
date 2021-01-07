import dotenv from "dotenv";
import app from "./server.js";
import "./db.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Listening on : http://localhost:${PORT}`));
