import { uuid } from "uuidv4";
import { Router } from "express";

import Hospital from "../models/hospitalsSchema";
import Technican from "../models/technicianSchema";
import Doctor from "../models/doctorSchema";

import admin from "../../firebaseConfig";

const router = Router();
router.post("/signup", async (req, res) => {
  const { hospital_name, location } = req.body;
  const hospital_id = uuid();
  try {
    let H = new Hospital();
    H.hospital_name = hospital_name;
    H.hospital_id = hospital_id;
    H.location = location;
    H.hospital_email = `${hospital_name}@uhs.ac.in`;
    const userCredential = await admin.auth().createUser({
      uid: hospital_id,
      password: hospital_name + location,
      displayName: hospital_name,
      email: `${hospital_name}@uhs.ac.in`,
    });
    if (userCredential) {
      console.log("user created");
    }
    await H.save();
    res.status(201).json({ message: "successfully created" });
  } catch (e) {
    console.log(e);
  }
});
router.get("/getDetails/:id", async (req, res) => {
  let hospital_id = req.params.id;
  let doctors = await Doctor.find({ hospital_id });
  let techinican = await Technican.find({ hospital_id });
  res.status(201).send({ Doctors: doctors, Techinican: techinican });
});

export default router;
