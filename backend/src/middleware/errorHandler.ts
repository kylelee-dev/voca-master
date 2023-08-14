// NotFound Handler

import { Request, Response, NextFunction } from "express";

const notFound = (req: any, res: any, next: NextFunction) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler

const errorHandler = (
  err: Error,
  req: Request,
  res: any,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json({
    message: err?.message,
    stack: err.stack,
  });
};

export { notFound, errorHandler };
