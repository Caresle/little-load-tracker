import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.WS_PORT | 4000;

app.get("/", (_, res) => {
  return res.json("SOCKET SERVER LITTLE LOAD TRACKER");
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

  socket.on("CREATE_LOAD", (data) => {
    console.log("socket create load event");
    console.log(data);
    socket.broadcast.emit("CREATE_LOAD", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
