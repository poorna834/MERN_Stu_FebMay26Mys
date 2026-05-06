import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

console.log("🚀 Server file is running...");
console.log("MONGO_URI Loaded:", !!process.env.MONGO_URI);

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
import contactRoute from "./routes/contact.js";

// Routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

app.use("/api", contactRoute);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ DB Error:", err));

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});