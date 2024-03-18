import { uuid } from "uuidv4";
import { Router } from "express";

import Technican from "../models/technicianSchema";
import Hospital from "../models/hospitalsSchema";
import User from "../models/authSchema";

import admin from "../../firebaseConfig";

const router = Router();

router.post("/signup", async (req, res) => {
  const { hospital_id, name, age, sex } = req.body;
  try {
    let hospital = await Hospital.findOne({ hospital_id });
    if (!hospital) {
      res.status(401).json({ message: "Hospital id is not valid" });
    } else {
      try {
        const techinican_id = uuid();
        let techinican = new Technican();
        techinican.hospital_id = hospital_id;
        techinican.name = name;
        techinican.age = age;
        techinican.sex = sex;
        techinican.techinican_id = techinican_id;
        techinican.techician_email = `${name}techinician@uhs.ac.in`;
        try {
          const userCredential = await admin.auth().createUser({
            uid: techinican_id,
            password: techinican_id + name,
            displayName: name,
            email: `${name}techinician@uhs.ac.in`,
          });
          if (userCredential) {
            console.log("user created");
          } else {
            res
              .status(400)
              .json({ message: "Someting went wrong while firebase creation" });
          }

          await techinican.save();
          res
            .status(201)
            .json({ message: "successfully created", uid: techinican_id });
        } catch (e) {
          console.log(e);
          res.status(400).json({ message: "Some internal error has occured" });
        }

      } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Some internal error has occured" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Some internal error has occured" });
  }
});

router.get("/getDetails/:id", async (req, res) => {
  let techinican_id = req.params.id;
  try {
    let technician = await Technican.findOne({ techinican_id });
    res.status(201).json(technician);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/uploadTestReport", async (req, res) => {
  let { uuid, lab_reports } = req.body;
  let response = await User.findOne({ uuid });
  if (response) {
    console.log(response["lab_reports"]);
    response["lab_reports"].push(lab_reports);
    console.log(response["lab_reports"]);
    await response.save();
    res.status(201).json({ message: "success" });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
});

export default router;
