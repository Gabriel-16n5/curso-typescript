import Joi from "joi";
import { Music } from "../protocols/music-protocol";

export const musicSchema = Joi.object<Music>({
    artist: Joi.string().required(),
    title: Joi.string().required()
})