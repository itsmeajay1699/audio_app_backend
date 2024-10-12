import { Router } from "express";
import {
  getAllProgram,
  getAllTracksByName,
} from "../../controllers/programController.js";

const programRouter = Router();

programRouter.get("/all", getAllProgram);
programRouter.get("/tracks/:name", getAllTracksByName);

export default programRouter;
