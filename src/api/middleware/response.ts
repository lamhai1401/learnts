import "./base";
import { Request, Response, NextFunction } from "express";

export class Resp<T> {
    constructor(
        public data: T
    ){}
}

export function pipeResponse<T>(next: NextFunction){
    return (resp:T) => next(new Resp(resp))
}

async function responseHandler(data, req: Request, resp: Response, next: NextFunction) {
    if (resp instanceof Resp) {
        return resp.status(200)
        .json({
            status: "ok",
            ...data,
        })
    } else {
        next(data)
    }
}


export const responseMiddleWares = [
    responseHandler,
]