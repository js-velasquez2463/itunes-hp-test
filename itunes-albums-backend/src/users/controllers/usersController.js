import { Router } from "express";
import jsonwebtoken from "jsonwebtoken";
import config from "../../shared/config.js";

const router = Router();

export const login = async (req, res) => {
  const { credentials, jwtSecret, jwtExpiration } = config;
  const { username, password } = req.body;

  if (username === credentials.username && password === credentials.password) {
    const token = jsonwebtoken.sign({ username }, jwtSecret, {
      expiresIn: jwtExpiration,
    });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid username or password" });
};

export default router;
