import bodyParser from "body-parser";
import cors from 'cors';
import { Request, Response, NextFunction } from "express";
import url from 'url';
import { RequestContextClass } from "../../types/requestContext";

export const baseMiddleWares = [
    (req: Request, resp : Response, next: NextFunction) => {
        if (req.locals) {
            req.locals = new RequestContextClass()
        }
        req.locals.userIP = (req.header('x-forwarded-for') || req.connection.remoteAddress)
        req.locals.userIP = (req.locals.userIP || "").split(",")[0]
        req.locals.userAgent = req.header('user-agent')
        req.locals.referer = req.header('referrer') || req.header('referer')
        next();
    },

    (req: Request, resp : Response, next: NextFunction) => {
        resp.header("Access-Control-Allow-Origin", "*");
        resp.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Account, Token, Signature, Nonce, Sub");
        next();
    },

    //Enables cors
    cors(),

    bodyParser.urlencoded({
        extended: true
    }),

    // bodyParser.json({
    //     limit: '5KB',
    //     verify: function (req: Request, res: Response, buf) {
    //         if (req.method == "GET" && req.headers["token"])
    //             req.rawBody = url.parse(req.url).query || ""
    //         else if (req.method == "POST" && req.headers["token"])
    //             req.rawBody = buf.toString()
    //         else
    //             req.rawBody = ''
    //     }
    // }),
]