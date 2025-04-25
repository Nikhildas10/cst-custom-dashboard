import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import credentials from "../config/credentials";
import ErrorHandler from "../utils/errorHandler";
import { db } from "../db";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
      };
    }
  }
}

interface JwtPayload {
  id: number;
  email: string;
}

export const isAutheticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new ErrorHandler(401, "No authorization token found");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      credentials.ACCESS_TOKEN_SECRET!
    ) as JwtPayload;

    if (!decoded) {
      throw new ErrorHandler(401, "Invalid token");
    }

    const [user] = await db
      .select({
        id: usersTable.id,
        email: usersTable.email,
      })
      .from(usersTable)
      .where(eq(usersTable.id, decoded.id))
      .limit(1);

    if (!user) {
      throw new ErrorHandler(401, "User not founc");
    }

    req.user = {
      id: user.id,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};
