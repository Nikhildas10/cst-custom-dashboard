import { z } from "zod";

export class ErrorHandler extends Error {
  statusCode: number;
  errors?: Array<{ field?: string; message: string }>;

  constructor(
    statusCode: number,
    message: string,
    errors?: Array<{ field?: string; message: string }>
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    Error.captureStackTrace(this, this.constructor);
  }

  static fromZodError(error: z.ZodError): ErrorHandler {
    const validationErrors = error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    return new ErrorHandler(
      400,
      'Validation failed',
      validationErrors
    );
  }
}

export default ErrorHandler;
