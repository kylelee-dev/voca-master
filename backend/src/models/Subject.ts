import { Schema, model } from "mongoose";

const SubjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    words: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export const Subject = model("Subject", SubjectSchema);
