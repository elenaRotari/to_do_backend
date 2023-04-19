import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./lib/connection.js";
import userRouter from "./routes/userRouter.js";
import tasksRouter from "./routes/tasksRouter.js";

const PORT = process.env.PORT || 4000;

const app = express();
// setmiddlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://to-do-front-topaz.vercel.app/",
  })
);
// set routes
app.use("/users", userRouter);
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
