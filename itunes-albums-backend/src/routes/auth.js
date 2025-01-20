import { Router } from "express";
import { login } from "../users/controllers/usersController.js";

const router = Router();

router.post("/", login);

export default router;