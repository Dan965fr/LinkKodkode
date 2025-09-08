import express from "express";
import postRoutes from "./routes/postsRoutes.js";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Static folder for images
app.use("/images", express.static("public/images"));

// Routes
app.use("/api/posts", postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});