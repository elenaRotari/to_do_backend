import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  try {
    if (!req.body.password) {
      return res
        .status(404)
        .send({ aprooved: false, message: "password isnt valid" });
    } else {
      const user = await User.findOne({ email: req.body.email });
      const verify = await bcrypt.compare(req.body.password, user.password);

      if (verify) {
        req.token = jwt.sign({ id: user._id }, process.env.JWT, {
          expiresIn: "2h",
        });

        next();
      } else {
        return res
          .status(404)
          .send({ aprooved: false, message: "wrong user data" });
      }
    }
  } catch (error) {
    res.status(404).send({ aprooved: false, message: error.message });
  }
};
