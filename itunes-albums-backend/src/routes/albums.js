import { Router } from "express";
import { getAlbums } from "../albums/controllers/albumsController.js";

const router = Router();

router.get("/", getAlbums);

export default router;
