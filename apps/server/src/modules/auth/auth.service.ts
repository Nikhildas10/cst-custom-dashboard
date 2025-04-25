import bcrypt from "bcrypt";
import { db } from "../../db";
import { usersTable } from "../../db/schema";
import { ILoginInput, IRegisterInput } from "./auth.validation";
import ErrorHandler from "../../utils/errorHandler";
import { eq } from "drizzle-orm";
import credentials from "../../config/credentials";
import jwt from "jsonwebtoken";

class AuthService {
   register=async(data: IRegisterInput)=> {
    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db
      .insert(usersTable)
      .values({ name, email, password: hashedPassword })
      .returning();
    return user;
  }

  login = async (data:ILoginInput) => {
   const { email, password } = data;

    const users = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    const user = users[0];

    if (!user) {
      throw new ErrorHandler(401, "Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ErrorHandler(401, "Invalid email or password");
    }
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      credentials.ACCESS_TOKEN_SECRET!
    );
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      accessToken,
      createdAt: user.createdAt,
    };
  }
}

export const authService = new AuthService();
