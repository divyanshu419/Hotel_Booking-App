import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhook.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebHooks);

app.get("/", (req, res) => {
    res.send("API working 🚀");
});
export default app;