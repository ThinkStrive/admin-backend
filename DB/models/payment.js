import mongoose from "mongoose";


const paymentSchema = mongoose.Schema({
    payment_id : {
        type : String,
        required : true,
    },
    payment_status : {
        type : String,
        required : true
    },
    roulette_rise_email : {
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
    subscription_for : {
        type : String,
        required : true
    },
    subscription_type : {
        type : String,
        required: true
    },
    amount : {
        type : String,
        required : true
    },
    paypal_name : {
        type : String,
        required : true
    }, 
    paypal_email: {
        type : String,
        required : true
    },
    paypal_payer_id : {
        type : String,
        required : true
    }
},{timestamps:true})


export const paymentModel = mongoose.model('payments', paymentSchema)