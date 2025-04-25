import { Router } from "express";
import { authRouter } from "../../modules/auth/auth.route";
import { widgetRouter } from "../../modules/widget/widget.route";
import { isAutheticated } from "../../middleware/auth.middleware";

const v1Router=Router()

v1Router.use("/user/auth",authRouter)
v1Router.use("/user/widget",isAutheticated,widgetRouter)

export  {v1Router}