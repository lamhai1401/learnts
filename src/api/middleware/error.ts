import "./base";
import { Request, Response, NextFunction } from "express";
import { ErrorBase } from "../../utils/errors";

async function ServiceErrorHandler(err, req: Request, resp: Response, next: NextFunction) {
    if (req.method == "OPTIONS")
        return next()
    if (err instanceof ErrorBase) {
        return resp.status(err.toCode()).json({
            status: "error",
            msg: err.message || err.toMessage(),
            code: err.toCode(),
            data: err.data
        })
    } else {
        next(err || {})
    }
}

async function UnKnowErrorHandler(error, req: Request, resp: Response, next: NextFunction) {
    if (req.method == "OPTIONS")
        return next()
    console.error(error)
    return resp.status(401).json({
        status: "error",
        msg: (error || "").toString(),
    })
}

async function NotFoundErrorHandler(req: Request, res: Response, next: NextFunction) {
    if (req.method == "OPTIONS")
        return next()
    return res.status(401).json({
        status: "error",
        msg: "Not Found"
    })
}

export const errorMiddleWares = [
    ServiceErrorHandler,
    UnKnowErrorHandler,
    NotFoundErrorHandler,
]