import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import ErrorHandler from "../utils/errorHandler";

const errorMiddleware = (
  err: any,
  req: any,
  res: any,
  next: NextFunction
) => {
  if (err instanceof z.ZodError) {
    const error = ErrorHandler.fromZodError(err);
    return res.status(error.statusCode).json({
      status: false,
      message: error.message,
      errors: error.errors,
    });
  }

  if (err.code === "23505") {
    const detail = err.detail || "";
    const match = detail.match(/Key \((.*?)\)=/);
    let field = "Value";
    if (match && match[1]) {
      field = match[1];
    }

    return res.status(400).json({
      status: false,
      message: `${field} already exists. Please choose a different one.`,
    });
  }

  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({
      status: false,
      message: err.message,
    });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error("Error:", err);

  res.status(statusCode).json({
    status: false,
    statusCode,
    message,
  });
};

export default errorMiddleware;
