import express from "express";
import {
  deleteOne,
  getAll,
  getOne,
  postOne,
  updateOne,
} from "../controller/tasksControler.js";
import auth from "../middleware/auth.js";

const tasksRouter = express.Router();

tasksRouter.route("/").get(auth, getAll).post(auth, postOne);
tasksRouter
  .route("/:id")
  .get(auth, getOne)
  .patch(auth, updateOne)
  .delete(auth, deleteOne);

export default tasksRouter;
