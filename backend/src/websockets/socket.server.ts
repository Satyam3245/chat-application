import  {WebSocketServer}  from "ws";
import { Server as HttpServer } from "http";

export function initializeWebSocket(server: HttpServer) {
  const wss = new WebSocketServer({
    server,
  });

  wss.on("connection", (socket) => {
    console.log("User Connected");

    socket.on("message", (message) => {
      console.log(message.toString());
    });

    socket.on("close", () => {
      console.log("User Disconnected");
    });
  });
}