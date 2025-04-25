import { Router } from "express";
import { authRouter } from "../../modules/auth/auth.route";

const v1Router=Router()

v1Router.use("/user/auth",authRouter)


export  {v1Router}