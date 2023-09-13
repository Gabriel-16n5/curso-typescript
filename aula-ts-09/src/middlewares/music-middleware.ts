import { ObjectSchema } from "joi"
import { Music } from "../protocols/music-protocol"
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"

export function validateSchema(schema: ObjectSchema<Music>) {

    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(httpStatus.BAD_REQUEST).send(errors)
        }

        next()
    }
}