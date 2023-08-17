// GET ALL SUBJECTS FOR A USER

import { Subject } from "../models/Subject";
import asyncHandler from "express-async-handler";

const getSubjects = asyncHandler(async (req, res) => {
  const subjectIds = req.body;
  const records = await Subject.find({ _id: { $in: subjectIds } });

  //const records = await Model.find({ '_id': { $in: ids } });
  if (records) {
    res.json(200).json(records);
  } else {
    res.json(400).json("Invalid Subject IDs");
  }
});
