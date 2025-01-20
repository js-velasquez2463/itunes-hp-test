import { Router } from "express";
import { getAlbums } from "../albums/controllers/albumsController.js";
import authMiddleware from "../shared/middleware/authMiddleware.js";

const router = Router();

router.get("/", authMiddleware, getAlbums);

export default router;
