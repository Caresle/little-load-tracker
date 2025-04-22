import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import socketLoadController from "./controllers/loads.controller";
import socketItemController from "./controllers/items.controller";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.WS_PORT | 4000;

app.get("/", (_, res) => {
  return res.json("SOCKET SERVER LITTLE LOAD TRACKER");
});

app.get("/load", (_, res) => {
  io.emit("CREATE_LOAD", { msg: "CREATED" });
  return res.json("EMITTING THE EVENT CREATE_LOAD");
});

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log(socket.id);

  socket.on("ping", () => {
    console.log("pong");
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socketLoadController(socket);
  socketItemController(socket);
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
