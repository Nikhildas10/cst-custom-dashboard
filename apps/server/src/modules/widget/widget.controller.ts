import { Request, Response, NextFunction } from "express";
import { updatePreferencesSchema } from "./widget.validation";
import ErrorHandler from "../../utils/errorHandler";
import { widgetService } from "./widget.service";

export class WidgetController {
 private widgetService;
 constructor() {
    this.widgetService = widgetService;
  }

  updatePreferences = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        throw new ErrorHandler(401, "Unauthorized");
      }

      const validatedData = updatePreferencesSchema.parse(req.body);
      
      const updatedUser = await this.widgetService.updatePreferences(
        userId,
        validatedData.preferences
      );

      res.status(200).json({
        status: true,
        message: "Widget preferences updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  };

  getPreferences = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.user?.id; 
      if (!userId) {
        throw new ErrorHandler(401, "Unauthorized");
      }

      const preferences = await this.widgetService.getPreferences(userId);

      res.status(200).json({
        status: true,
        message: "Widget preferences retrieved successfully",
        data: preferences,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const widgetController = new WidgetController();
