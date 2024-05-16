import express from "express";
import dotenv from "dotenv";
import Connection from "./db.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { AdminRouter } from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());
Connection();
app.use("/auth", AdminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});