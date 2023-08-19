import asyncHandler from "express-async-handler";
import { Word } from "../models/Word";

export const getWords = asyncHandler(async (req, res) => {
  const { ids } = req.body;

  const words = await Word.find({ _id: { $in: ids } });

  if (words.length === 0) {
    res.status(400);
    throw new Error("Could not find any word matching the IDs");
  }
  res.status(200).json(words);
});

export const createWord = asyncHandler(async (req, res) => {
  const { title, meaning, description } = req.body;

  const word = await Word.create({
    title,
    meaning,
    description,
  });
  if (!word) {
    res.status(400);
    throw new Error("Creation Failed");
  }
  res.status(200).json(word);
});

export const updateWord = asyncHandler(async (req, res) => {
  const { title, meaning, description } = req.body;
  const testingId = "64dfd226ba6ac3cee1bc9b3d";
  const updateInfo = {};
  if (title) updateInfo.title = title;
  if (meaning) updateInfo.meaning = meaning;
  if (description) updateInfo.descrioption = description;

  const word = await Word.findByIdAndUpdate(testingId, updateInfo);

  if (!word) {
    res.status(400);
    throw new Error("Something went wrong!");
  }
  res.status(200).json(word);
});

export const removeWord = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const word = await Word.findByIdAndRemove(id);

  if (!word) {
    res.status(400);
    throw new Error("Something went wrong!");
  }
  res.status(200).json(word);
});
