import Tasks from "../models/Tasks.js";
import User from "../models/User.js";

export const getAll = async (req, res) => {
  try {
    // res.status(201).send(await User.findById(req.token.id).populate("tasks"));
    res.status(201).send(await Tasks.find({ user: req.token.id }));
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
export const getOne = async (req, res) => {
  try {
    res.status(201).send(await Tasks.findById(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
export const postOne = async (req, res) => {
  try {
    const task = await Tasks.create({ ...req.body, user: req.token.id });
    await User.findByIdAndUpdate(req.token.id, {
      $push: {
        tasks: task._id,
      },
    });
    res.status(201).send(task);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
export const updateOne = async (req, res) => {
  try {
    res
      .status(201)
      .send(await Tasks.findByIdAndUpdate(req.params.id, { ...req.body }));
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
export const deleteOne = async (req, res) => {
  try {
    res.status(201).send(await Tasks.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
