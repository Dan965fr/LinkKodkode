import express from "express";
import cors from 'cors';
import postRoutes from "./routes/postsRoutes.js";
import authRoutes from "./routes/authsRoutes.js";
import { config } from "dotenv";
config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors())

// Static folder for images
app.use(express.static("public"));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/auth",authRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});