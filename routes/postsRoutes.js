import express from "express";
import { getAllPostsC, getPostByIdC, createPostC } from "../controllers/postsController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllPostsC);
router.get("/:id", authMiddleware, getPostByIdC);
router.post("/", authMiddleware, createPostC);

export default router;