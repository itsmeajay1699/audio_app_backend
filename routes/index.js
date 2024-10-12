import { Router } from "express";
import programRouter from "./programs/index.js";
const indexRouter = Router();

indexRouter.use("/program", programRouter);
export default indexRouter;
