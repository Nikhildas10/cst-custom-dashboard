import { z } from "zod";

const widgetSchema = z.object({
  widgetName: z.string(),
  isVisible: z.boolean(),
});

export const updatePreferencesSchema = z.object({
  preferences: z.array(widgetSchema)
    .min(1, "At least one widget preference is required")
    .max(50, "Too many widget preferences")
});

export type WidgetPreference = z.infer<typeof widgetSchema>;
export type UpdatePreferencesInput = z.infer<typeof updatePreferencesSchema>;
