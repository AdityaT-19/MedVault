import mongoose from 'mongoose'
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
    "medicines": [MedicineSchema],
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
    },
    "test_to_be_performed": {
        type: String,
    }
}, { timestamps: true })
const VisitngSchema=new mongoose.Schema({
    "patient_id": {
        type: String,
        required: true,
    },
    "hospital_id": {
        type: String,
        required: true,
    },
    "doctor_id": [{
        type: String,
        required: true,
    }],
    "techinician_id": {
        type: String,
        // required:true,
    },
    "test_performed": [
        {
            type: String,
            required: true,
        }
    ],
    "test_reports": [PreviousRecordandReportsSchema],

    "disease_diagonosed": [DiseaseSchema],
    "medications": [MedicineSchema],
    "treatments": [TreatmentSchema],
    "case_active": {
        type: Boolean,
        default: true,
        required: true
    },
    "bills": [
        {
            type: String,
        }
    ],
    "prescriptions": [PrescriptionSchema]
})
const VisitngFrom=mongoose.model("VisitngForm",VisitngSchema);

export default VisitngFrom;