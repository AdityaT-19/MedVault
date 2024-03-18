import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import doctorController from "./controllers/doctorController";
import emtController from "./controllers/emtController";
import insuranceController from "./controllers/insuranceController";
import labtechinicianController from "./controllers/labtechnicianController";
import hospitalController from "./controllers/hospitalController";
import userController from "./controllers/userController";

const db = mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("successfully connected to mongo db");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/user", userController);
app.use("/doctor", doctorController);
app.use("/emt", emtController);
app.use("/insurance", insuranceController);
app.use("/labtechinician", labtechinicianController);
app.use("/hospital", hospitalController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Port started in port 3000");
});
