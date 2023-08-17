import express, { Router } from "express";

const router: Router = express.Router();

// GET ALL SUBJECTS
router.get("/", getAllSubjects);
// GET WORDS FOR A SPECIFIC SUBJECT
router.get("/:id", getSubject);
// ADD A NEW SUBJECT
router.post("/", addSubject);
// UPDATE SUBJECT
// ADD A WORD TO SUBJECT
router.put("/addWord/:id", addWordToSubject);
// DELETE A WORD FROM SUBJECT
router.put("/removeWord/:id", removeWordFromSubject);
// DELETE A SUBJECT
router.delete("/:id", deleteSubject);
