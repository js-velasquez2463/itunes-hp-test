import express from "express";
import cors from "cors";
import albumsRouter from "./routes/albums.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/albums", albumsRouter);
app.use("/api/login", authRouter);

export default app;
