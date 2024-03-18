import { uuid } from "uuidv4";
import { Router } from "express";

import Insurance from "../models/insuranceSchema";
import User from "../models/authSchema";
import Company from "../models/insuranceCompanySchema";

import admin from "../../firebaseConfig";

const router = Router();

router.post("/signup", async (req, res) => {
  const { company_name, email } = req.body;
  try {
    let company = new Company();
    company.company_name = company_name;
    company.email = email;
    company.insurance_uuid = uuid();
    const userCredential = await admin.auth().createUser({
      uid: company.insurance_uuid,
      password: company.email,
      displayName: company_name,
      email: email,
    });
    if (userCredential) {
      console.log("user created");
    }
    await company.save();
    res
      .status(201)
      .json({ message: "successfully created", uid: company.insurance_uuid });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { insurance_uuid } = req.body;
  let response = await Company.find({ insurance_uuid });
  if (response) {
    res.status(201).json({ message: "Logged in Successfully" });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }
});

router.post("/add/:id", async (req, res) => {
  const insurance_uuid = req.params.id;
  const {
    insurance_policy_no,
    patient_uuid,
    profile_image,
    user_name,
    age,
    sex,
    phone_no,
    email,
    nominee_details,
    address,
    aadhar_no,
    sum_assured,
    number_of_premiums,
    name_of_policy,
  } = req.body;
  try {
    try {
      let insurance = new Insurance();
      insurance.insurance_uuid = insurance_uuid;
      insurance.insurance_policy_no = insurance_policy_no;
      let uuid = patient_uuid;
      let user = await User.findOne({ uuid });
      if (!user) {
        res.status(401).json({ message: "invalid patient id" });
        return;
      }
      insurance.patient_uuid = patient_uuid;
      (insurance.profile_image = profile_image),
        (insurance.user_name = user_name),
        (insurance.age = age),
        (insurance.sex = sex),
        (insurance.phone_no = phone_no),
        (insurance.email = email),
        (insurance.nominee_details = nominee_details),
        (insurance.address = address),
        (insurance.aadhar_no = aadhar_no),
        (insurance.sum_assured = sum_assured),
        (insurance.number_of_premiums = number_of_premiums),
        (insurance.name_of_policy = name_of_policy);
      await insurance.save();
      res.status(201).json({ message: "user created" });
    } catch (e) {
      console.log(e);
      res
        .status(400)
        .json({ message: "Someting went wrong while firebase creation" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "something went wrong" });
  }
});

router.get("/getDetails/:id", async (req, res) => {
  const insurance_uuid = req.params.id;
  let responses = await Insurance.find({ insurance_uuid });
  res.status(201).json(responses);
});

export default router;
