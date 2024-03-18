import express from "express";
//import cors from "cors";
import * as http from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import * as mongoose from "mongoose";

import EmtChatModel from "./models/emtChatModel";

const app = express();
//cors({ origin: true });
const server = http.createServer(app);
const io = new SocketIOServer(server);

//Database connection if not working instead of localhost use 127.0.0.1
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(`${mongoUrl}`)
  .then(() => {
    console.log("connection success");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
//app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Working fine" });
});

io.on("connection", (socket: Socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", async (msg: any) => {
    let newMessage = new EmtChatModel();
    newMessage.EmtId = msg.EmtId;
    newMessage.UserId = msg.UserId;
    newMessage.HospitalId = msg.HospitalId;
    newMessage.message = msg.message;

    await newMessage.save();
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  socket.on("qrscan", (msg: any) => {
    console.log(msg);
    io.emit("qrscan", msg);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
