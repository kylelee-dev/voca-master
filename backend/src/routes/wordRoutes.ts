import express, { Router } from "express";
import {
  createWord,
  getWords,
  removeWord,
  updateWord,
} from "../services/wordServices";

const router: Router = express.Router();

router.get("/", getWords);
router.post("/", createWord);
router.delete("/:id", removeWord);
router.put("/:id", updateWord);

export default router;
