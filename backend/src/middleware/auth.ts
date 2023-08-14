import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.toString().split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
      if (err) {
        res.status(403).json("Invalid Token.");
      }
      (req as any).user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated.");
  }
};

export default verifyToken;
