import mongoose from 'mongoose';
const NomineeSchema=new mongoose.Schema({
    "nominee_name": {
        type: String,
        required: true
    },
    "nominee_relationship": {
        type: String,
        required: true,
    }
})
const InsuranceSchema=new mongoose.Schema({
    "insurance_uuid": {
        type: String,
        required: true,
    },
    "insurance_policy_no": {
        type: String,
        required: true,
    },
    "patient_uuid": {
        type: String,
        required: true,
    },
    "profile_image": {
        type: String,
        required: true,
    },
    "user_name": {
        type: String,
        required: true
    },
    "age": {
        type: Number,
        required: true,
    },
    "sex": {
        type: String,
        required: true,
    },
    "phone_no": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
    },
    "nominee_details": [NomineeSchema],
    "address": {
        type: String,
        required: true,
    },
    "aadhar_no": {
        type: Number,
        required: true,
        unique: true,
    },
    "sum_assured": {
        type: Number,
        required: true,
    },
    "number_of_premiums": {
        type: Number,
        required: true,
    },
    "name_of_policy": {
        type: String,
        required: true,
    },
}, { timestamps: true })
const Insurance=mongoose.model("Insurance",InsuranceSchema);
export default Insurance;