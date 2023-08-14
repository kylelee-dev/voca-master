import express, { Router } from "express";
import { loginUser, registerUser } from "../services/userServices";

const router: Router = express.Router();

// POST user (signup)
router.post("/", registerUser);

// POST user/login
router.post("/login", loginUser);

export default router;
