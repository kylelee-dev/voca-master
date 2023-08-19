import { Schema, model } from "mongoose";

const wordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export const Word = model("Word", wordSchema);
