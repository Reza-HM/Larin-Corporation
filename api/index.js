const express = require("express");
const jsonServer = require("json-server");
const server = express();
const router = jsonServer.router("/src/data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

export default server;
