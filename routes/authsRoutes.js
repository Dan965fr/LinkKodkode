import express from "express";
import { registerC, loginC } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerC);
router.post("/login", loginC);

export default router;