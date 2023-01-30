import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  try {
    const token = jwt.verify(req.cookies.loginCookie, process.env.JWT);

    if (token) {
      req.token = token;
      next();
    } else {
      res.status(404).send({ message: "please log in " });
    }
  } catch (error) {
    res.status(404).send({ aprooved: false, message: error.message });
  }
};
