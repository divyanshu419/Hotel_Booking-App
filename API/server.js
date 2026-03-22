import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebHooks from "./controllers/clerkWebhook.js";

const app = express();

await connectDB();

//  Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("API working 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(" Server is running on port " + PORT);
}
)

app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebHooks);

export default app;