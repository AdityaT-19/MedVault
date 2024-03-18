import mongoose from 'mongoose';
const emtChatSchema=new mongoose.Schema({
    "user": {
        type: String,
        required: true,
    },
    "triage": {
        type: String,
        // required:true,
    },
    "description": {
        type: String,
        //required:true,
    },
    "bp_level": {
        type: String,
        //required:true,
    },
    "spO2": {
        type: String,
        //required:true,
    },
    "pulse_rate": {
        type: String,
        //required:true,
    }
})
const emtChatModel=mongoose.model("emtChatModel",emtChatSchema)

export default emtChatModel;