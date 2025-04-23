const errorMiddleware = (err: any, req: any, res: any, next: any) => {
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

  if (err.type === "ValidationError") {
    return res.status(400).json({
      status: false,
      message: "Validation failed",
      errors: err.errors,
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
