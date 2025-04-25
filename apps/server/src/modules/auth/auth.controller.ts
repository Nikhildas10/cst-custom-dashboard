import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/errorHandler";
import { authService } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.validation";

export class AuthController {
  private authService;
  constructor() {
    this.authService = authService;
  }

  register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const validatedData = registerSchema.parse(req.body);
      const newUser = await this.authService.register(validatedData);

      if (!newUser) {
        throw new ErrorHandler(401, "User registration failed");
      }

      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const validatedData=loginSchema.parse(req.body) 
      const user = await this.authService.login(validatedData);
      
      res.status(200).json({
        status: true,
        message: "Login successful",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };

}

export const authController = new AuthController();
