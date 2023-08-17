import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  subjects: string[] | undefined;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    subjects: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);

export const User = model<IUser>("User", userSchema);
