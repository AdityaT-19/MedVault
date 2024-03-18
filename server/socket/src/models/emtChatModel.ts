import mongoose from 'mongoose';

interface EmtDocument extends mongoose.Document{
    EmtId: string;
    UserId: string;
    HospitalId: string;
    message: string;
}

const EmtSchema = new mongoose.Schema<EmtDocument>({
    EmtId: {
        type: String,
        required:true,
    },
    UserId: {
        type: String,
       required:true,
    },
    HospitalId: {
        type: String,
        required:true,
    },
    message: {
        type: String,
        required:true,
    }
});

const EmtChatModel = mongoose.model('Emt', EmtSchema);

export default EmtChatModel;