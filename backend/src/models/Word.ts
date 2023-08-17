import { Schema, model } from "mongoose";

const wordSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    meanings: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export const Word = model("Word", wordSchema);
