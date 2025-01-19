import express from "express";
import cors from "cors";
import albumsRouter from "./routes/albums.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/albums", albumsRouter);

export default app;
