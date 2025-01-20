import jsonwebtoken from "jsonwebtoken";
import config from "../config.js";

const authMiddleware = (req, res, next) => {
  const { jwtSecret } = config;
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access token is missing or invalid" });
  }

  try {
    const decoded = jsonwebtoken.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    console.error(`Invalid or expired token ${err.message}`);
    return res.status(403).json({ message: `Invalid or expired token` });
  }
};

export default authMiddleware;
