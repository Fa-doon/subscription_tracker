import { sendReminders } from "../controllers/workflow.controller.js";
import { Router } from "express";
const workflowRouter = Router();

workflowRouter.post('/subscription/reminder', sendReminders);

export default workflowRouter;