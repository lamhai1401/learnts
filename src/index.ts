import express from "express";
import http, { IncomingMessage } from 'http';
import { adminRoute } from "./api/controller/";
import { Socket } from 'net';

const PORT = process.env.PORT || 8081
const app = express()
const server = new http.Server(app);


server.on(
    "upgrade",
    async (request: IncomingMessage, socket: Socket, head: Buffer) => {

    }
)


app.get("/", (req, res) => res.json({ status: "ok" }))
app.use("/admin", adminRoute)
console.log("[SYSTEM] Server Starting")