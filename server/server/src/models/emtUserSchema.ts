import mongoose from 'mongoose';
const emtUserSchema=new mongoose.Schema({
    "emt_uuid": {
        type: String,
        required: true,
    },
    "hospital_id": {
        type: String,
        required: true,
    },
    "emt_name": {
        type: String,
        required: true,
    },
    "emt_email": {
        type: String,
        required: true,
    },
    "emt_phone_no": {
        type: String,
        required: true,
    }
})
const emtUser=mongoose.model("emtUser",emtUserSchema)
export default emtUser;