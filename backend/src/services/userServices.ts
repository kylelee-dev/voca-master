import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import asyncHandler from "express-async-handler";
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    if (await User.findOne({ email })) {
      res.status(400);
      throw new Error("Email in use already.");
    }

    const user = await User.create({
      email,
      name,
      password: await hashPassword(password),
    });

    if (user) {
      res.status(200).json({
        _id: user.id,
        email: user.email,
        name: user.name,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // success
    res.status(200).json({
      _id: user.id,
      email: user.email,
      name: user.name,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

const hashPassword = async (password: string): Promise<string> => {
  const salt: string = await bcrypt.genSalt(10);
  const hashedPassword: string = await bcrypt.hash(password, salt);

  return hashedPassword;
};

const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "2d",
  });
};
