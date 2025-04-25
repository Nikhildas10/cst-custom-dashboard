import { db } from "../../db";
import { usersTable } from "../../db/schema";import { eq } from "drizzle-orm";
import type { WidgetPreference } from "./widget.validation";import ErrorHandler from "../../utils/errorHandler";
 class WidgetService {
   updatePreferences=async(userId: number, preferences: WidgetPreference[]) =>{    const [updatedUser] = await db
      .update(usersTable)      .set({
        widgetPreferences: preferences,        updatedAt: Math.floor(Date.now() / 1000),
      })      .where(eq(usersTable.id, userId))
      .returning({        id: usersTable.id,
        name: usersTable.name,        email: usersTable.email,
        widgetPreferences: usersTable.widgetPreferences,        updatedAt: usersTable.updatedAt,
      });
    if (!updatedUser) {      throw new ErrorHandler(404, "User not found");
    }
    return updatedUser;  }
   getPreferences=async(userId: number)=> {
    const [user] = await db      .select({
        widgetPreferences: usersTable.widgetPreferences,      })
      .from(usersTable)      .where(eq(usersTable.id, userId))
      .limit(1);
    if (!user) {      throw new ErrorHandler(404, "User not found");
    }
    return user.widgetPreferences;  }
}

export const widgetService = new WidgetService();
























