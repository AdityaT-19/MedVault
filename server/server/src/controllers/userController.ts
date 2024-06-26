import { uuid } from "uuidv4";
import { Router } from "express";

import User from "../models/authSchema";

import admin from "../../firebaseConfig";

const router = Router();

router.get("/", (req, res) => {
  res.status(201).json({ message: "Connected successfully check route" });
});

router.post("/signup", async (req, res) => {
  const {
    profile_image,
    user_name,
    age,
    sex,
    phone_no,
    email,
    emergency_details,
    address,
    aadhar_no,
    bpl_no,
    health_scheme_data,
    insurance_policy_no,
    medical_diseases,
    past_history,
    treatments_history,
    allergies,
    prescriptions,
    lab_reports,
    medicines,
    bloodGroup,
  } = req.body;
  try {
    let user = new User();
    const patient_uuid = uuid();
    user.uuid = patient_uuid;
    user.profile_image = profile_image;
    user.user_name = user_name;
    user.age = age;
    user.sex = sex;
    user.phone_no = phone_no;
    user.email = email;
    user.emergency_details = emergency_details;
    user.address = address;
    user.aadhar_no = aadhar_no;
    user.bpl_no = bpl_no;
    user.insurance_policy_no = insurance_policy_no;
    user.health_scheme_data = health_scheme_data;
    user.medical_diseases = medical_diseases;
    user.past_history = past_history;
    user.treatments_history = treatments_history;
    user.allergies = allergies;
    user.prescriptions = prescriptions;
    user.lab_reports = lab_reports;
    user.bloodGroup = bloodGroup;
    user.medicines = medicines;
    try {
      const userCredential = await admin.auth().createUser({
        uid: patient_uuid,
        password: '12345678',
        displayName: user_name,
        email: email,
      });
      if (userCredential) {
        console.log("user created");
      } else {
        res
          .status(400)
          .json({ message: "Someting went wrong while firebase creation" });
      }
      await user.save();
      res
        .status(201)
        .json({ message: "successfully created", uid: patient_uuid });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Some internal error has occured" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

router.get("/getDetails/:id", async (req, res) => {
  const uuid = req.params.id;
  try {
    const user = await User.findOne({ uuid });
    res.status(201).json(user);
  } catch (e) {
    console.log(e);
  }
});

export default router;
