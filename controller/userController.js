import User from "../models/User.js";

export const getAll = async (req, res) => {
  try {
    res.status(201).send(await User.find());
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const getOne = async (req, res) => {
  try {
    res.status(201).send(await User.findById(req.token.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const postOne = async (req, res) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const updateOne = async (req, res) => {
  try {
    res.status(201).send(await User.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const deleteOne = async (req, res) => {
  try {
    res.status(201).send(await User.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
export const loginOne = async (req, res) => {
  try {
    res
      .status(201)
      .cookie("loginCookie", req.token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .send({ message: "You are logged" });
  } catch (error) {
    res.status(404).send({ message: "login fail" });
  }
};
