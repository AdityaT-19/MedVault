import mongoose from 'mongoose';


const HealthSchema=new mongoose.Schema({
    "scheme_name": {
        type: String,
        required: true,
    },
    "id": {
        type: String,
        required: true,
    }
})
const MedicineSchema=new mongoose.Schema({
    "name": {
        type: String,
        required: true,
    },
    "dosage": {
        type: String,
        required: true,
    }
})
const DiseaseSchema=new mongoose.Schema({
    "disease_name": {
        type: String,
        required: true,
    },
    "severity": {
        type: String,
        required: true,
    },
    //"medicines":[MedicineSchema],
})
const HistorySchema=new mongoose.Schema({
    "disease_name": {
        type: String,
        required: true,
    },
    "doctor_name": {
        type: String,
        required: true,
    },
    // "medications":[MedicineSchema],
})
const TreatmentSchema=new mongoose.Schema({
    "treatments": {
        type: String,
        required: true,
    },
    "no_of_days": {
        type: Number,
        required: true,
    }
})
const AllergiesSchema=new mongoose.Schema({
    "allergy_name": {
        type: String,
        required: true,
    },
    "severity": {
        type: String,
        required: true,
    }
})
const EmergencyDetailsSchema=new mongoose.Schema({
    "emergency_contact_name": {
        type: String,
        required: true
    },
    "emergency_phone_no": {
        type: String,
        required: true,
    },
})
const PrescriptionSchema=new mongoose.Schema({
    "prescription_id": {
        type: String,
        unique: true,
    },
    "health_issue": {
        type: String,
        required: true,
    },
    "suspected_disease": {
        type: [DiseaseSchema],
    },
    "treatement_required": {
        type: [TreatmentSchema],
        required: true,
    },
    "follow_up": {
        type: String,
        required: true,
    },
    "medicines": {
        type: [MedicineSchema],
        required: true,
    },
    "doctor_id": {
        type: String,
        required: true,
    }
}, { timestamps: true })
const PreviousRecordandReportsSchema=new mongoose.Schema({
    "path": {
        type: String,
        required: true,
    },
    "added_date": {
        type: Date,
        required: true,
    }
})
const LabreportSchema=new mongoose.Schema({
    "report_id": {
        type: String,
        returired: true,
    },
    "report_name": {
        type: String,
        required: true,
    },
    "completed": {
        type: Boolean,
        required: true,
        default: false,
    },
    "type_of_test": {
        type: String,
        required: true,
    },
    "date_of_test": {
        type: Date,
        required: true,
    },
    "sub_test_reports": [PreviousRecordandReportsSchema],
    "doctor_id": {
        type: String,
        required: true,
    },
    "techinican_id": {
        type: String,
    }
})

const UserSchema=new mongoose.Schema({
    "uuid": {
        type: String,
        required: true,
        unique: true
    },
    // "password":{
    //     type:String,
    //     required:true
    // },
    "profile_image": {
        type: String,
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
    "bloodGroup": {
        type: String,
        required: true,
    },
    "emergency_details": [EmergencyDetailsSchema],
    "address": {
        type: String,
        required: true,
    },
    "aadhar_no": {
        type: Number,
        required: true,
        unique: true,
    },
    "bpl_no": {
        type: Number,
    },
    "health_scheme_data": [HealthSchema],
    "insurance_policy_no": {
        type: String,
    },
    "medical_diseases": [DiseaseSchema],
    "past_history": [HistorySchema],
    "treatments_history": [TreatmentSchema],
    "allergies": [AllergiesSchema],
    "prescriptions": [PrescriptionSchema],
    "medicines": [MedicineSchema],
    "lab_reports": [LabreportSchema],
})

const User=mongoose.model("User",UserSchema);
export default User;