import mongoose from 'mongoose';
const TechnicanDetailsSchema=new mongoose.Schema({
    "hospital_id": {
        type: String,
        required: true,
    },
    "techinican_id": {
        type: String,
        required: true,
    },
    "name": {
        type: String,
        required: true,
    },
    "age": {
        type: Number,
        required: true,
    },
    "sex": {
        type: String,
        required: true,
    },
    "techician_email": {
        type: String,
        required: true,
    }
}, { timestamps: true })
const Technican=mongoose.model("Technician",TechnicanDetailsSchema);
export default Technican;