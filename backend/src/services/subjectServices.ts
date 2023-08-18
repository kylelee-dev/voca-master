// GET ALL SUBJECTS FOR A USER

import { Subject } from "../models/Subject";
import asyncHandler from "express-async-handler";

export const getAllSubjects = asyncHandler(async (req, res) => {
  const { ids } = req.body;
  const records = await Subject.find({ _id: { $in: ids } });
  if (records) {
    res.status(200).json(records);
  } else {
    res.status(400).json("Invalid Subject IDs");
  }
});

export const getSubject = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const subject = await Subject.find({
    _id: id,
  });
  if (!subject) {
    res.status(400);
    throw new Error("Invalid Subject ID.");
  }
  res.status(200).json(subject);
});

export const createSubject = asyncHandler(async (req, res) => {
  const { title, words } = req.body;

  const subject = await Subject.create({
    title,
    words,
  });

  if (!subject) {
    res.status(400);
    throw new Error("Invalid Subject Data.");
  }
  res.status(200).json(subject);
});

export const addWordToSubject = asyncHandler(async (req, res) => {
  const subjectId = req.params.id;
  const { wordId } = req.body;

  const subject = await Subject.findByIdAndUpdate(subjectId, {
    $addToSet: { words: wordId },
  });
  if (!subject) {
    res.status(400);
    throw new Error("Failed to add");
  }

  res.status(200).json(await Subject.findById(subjectId));
});
export const removeWordFromSubject = asyncHandler(async (req, res) => {
  const subjectId = req.params.id;
  const { wordId } = req.body;

  const subject = await Subject.findByIdAndUpdate(subjectId, {
    $pull: { words: wordId },
  });
  if (!subject) {
    res.status(400);
    throw new Error("Failed to remove");
  }
  res.status(200).json(await Subject.findById(subjectId));
});
export const deleteSubject = asyncHandler(async (req, res) => {
  const subjectId = req.params.id;

  const subject = await Subject.findByIdAndDelete(subjectId);

  if (!subject) {
    res.status(400);
    throw new Error("Failed to remove");
  }
  res.status(200).json(subject);
});

