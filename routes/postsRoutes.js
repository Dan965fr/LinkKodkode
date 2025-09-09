import express from "express";
import {getAllPostsC,getPostByIdC,createPostC} from "../controllers/postsController.js";

const router = express.Router();


router.get("/", getAllPostsC);
router.get("/:id", getPostByIdC);
router.post("/",createPostC);



export default router;