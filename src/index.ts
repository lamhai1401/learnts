import express from "express";
import http, { IncomingMessage } from 'http';
import { adminRoute } from "./api/controller/";
import { Socket } from 'net';
import { connect, disconnect } from "./mongo";

const PORT = process.env.PORT || 8081
const app = express()
const server = new http.Server(app);


server.on(
    "upgrade",
    async (request: IncomingMessage, socket: Socket, head: Buffer) => {

    }
)

// connecting to mongo
connect();

app.get("/", (req, res) => res.json({ status: "ok" }))
app.use("/admin", adminRoute)

console.log("[SYSTEM] Server Starting");


setImmediate(async () => {
    server.listen(PORT);

    console.log("[SYSTEM] Server Started on port %s", PORT)
})