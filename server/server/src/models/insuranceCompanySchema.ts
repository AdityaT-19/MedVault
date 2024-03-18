import mongoose from 'mongoose'
const InsuranceCompanySchema=new mongoose.Schema({
    "insurance_uuid": {
        type: String,
        required: true,
        unique: true,
    },
    "company_name": {
        type: String,
        required: true,
    },
    "email": {
        type: String,
        required: true,
    }
})
const Company=mongoose.model("Company",InsuranceCompanySchema)
export default Company