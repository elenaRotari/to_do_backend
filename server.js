import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./lib/connection.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import userRouter from "./routes/userRouter.js";
import tasksRouter from "./routes/tasksRouter.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();
// setmiddlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: "https://to-do-front-elenarotari.vercel.app",
//   })
// );
// set routes
app.use(express.static("uploads"));
app.use("/", express.static("./dist"));
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.use("/users", userRouter);
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
