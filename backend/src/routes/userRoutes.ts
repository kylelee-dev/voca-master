import express, { Router } from "express";
import { loginUser, registerUser, updateUser } from "../services/userServices";

const router: Router = express.Router();

// POST user (signup)
router.post("/", registerUser);

// POST user/login
router.post("/login", loginUser);

router.put("/update", updateUser)

export default router;
