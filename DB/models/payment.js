import mongoose from "mongoose";


const paymentSchema = mongoose.Schema({
    payment_id : {
        type : String,
        required : true,
        // unique : true
    },
    payment_session_id : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true,
    },
    payment_for : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    currency : {
        type : String,
        required : true
    },
    gateway_name : {
        type : String,
        required : true
    },
    customer_details : {}
},{timestamps:true})


export const paymentModel = mongoose.model('payments', paymentSchema)