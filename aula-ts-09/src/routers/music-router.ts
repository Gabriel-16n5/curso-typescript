import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middlewares/music-middleware";
import { musicSchema } from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;