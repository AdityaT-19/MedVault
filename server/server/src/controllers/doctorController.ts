import { Router } from "express";
import { uuid } from "uuidv4";

import Doctor from "../models/doctorSchema";
import User from "../models/authSchema";

import admin from "../../firebaseConfig";

const router = Router();

router.post("/signup", async (req, res) => {
  const { hospital_id, doctor_name, age, sex, speciality, department } =
    req.body;
  try {
    let doctor = new Doctor();
    doctor.doctor_id = uuid();
    doctor.hospital_id = hospital_id;
    (doctor.doctor_name = doctor_name), (doctor.age = age);
    doctor.sex = sex;
    doctor.speciality = speciality;
    doctor.department = department;
    doctor.doctor_email = `${doctor_name + speciality + department}@uhs.ac.in`;
    const userCredential = await admin.auth().createUser({
      uid: doctor.doctor_id,
      password: doctor_name + doctor.doctor_id,
      displayName: doctor_name,
      email: `${doctor_name + speciality + department}@uhs.ac.in`,
    });
    if (userCredential) {
      console.log("user created");
    } else {
      res
        .status(400)
        .json({ message: "Someting went wrong while firebase creation" });
    }
    await doctor.save();
    res.status(201).json({ message: "user created", uid: doctor.doctor_id });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

router.post("/addPrescription", async (req, res) => {
  const { uuid, prescriptionForm } = req.body;
  console.log(prescriptionForm);
  try {
    let response = await User.findOne({ uuid });
    response!["prescriptions"].push(prescriptionForm);
    await response!.save();
    res.status(201).json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

export default router;
