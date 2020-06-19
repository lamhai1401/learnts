import { Request, Response } from "express";
import { URL } from "url";

export interface RequestContext {
    userIP : string
    userAgent : string
    referer : string
}

export class RequestContextClass implements RequestContext {
    constructor(){}
    userIP = ""
    userAgent = ""
    referer = ""
}

declare module "express" {
    export interface Request {
        locals: RequestContext
        rawBody: string
    }
    export interface Response {

    }
}