import { integer, jsonb, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  widgetPreferences: jsonb()
    .$type<Array<{ widgetName: string; isVisible: boolean }>>()
    .default([]),
  createdAt: integer().notNull().default(0),
  updatedAt: integer().notNull().default(0),
});

