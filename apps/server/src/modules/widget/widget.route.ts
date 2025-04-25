import { Router } from "express";
import { widgetController } from "./widget.controller";

const widgetRouter=Router()

widgetRouter.put("/preferences",widgetController.updatePreferences)
widgetRouter.get("/preferences",widgetController.getPreferences)

export {widgetRouter}