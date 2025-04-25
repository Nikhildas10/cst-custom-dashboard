import { drizzle } from "drizzle-orm/node-postgres";
import credentials from "../config/credentials";

export const db = drizzle(credentials.DATABASE_URL!);
