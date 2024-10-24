import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    subscription : [{
        subscription_id : { type : String }
    }],
    subscriptionType : {type : String, default : 'none'},
    subscriptionDate : {type : String, default : 'none'},
    subscriptionTime : {type : String, default : 'none'},
    projectsPlan : {
        project1 : { type : Boolean, default : true },
        project2 : { type : Boolean, default : true },
        project4 : { type : Boolean, default : false },
    }
});

export const userModel = mongoose.model('users', userSchema);
