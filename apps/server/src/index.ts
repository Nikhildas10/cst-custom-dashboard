import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "./middleware/error.middleware.js";
import credentials from "./config/credentials.js";

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Server Health: Ok",
  });
});
app.use("/*splat", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err); 
});

app.use(errorMiddleware)
app.listen(credentials.PORT, () => {
  console.log(`Server Started at PORT ${credentials.PORT}`);
});
