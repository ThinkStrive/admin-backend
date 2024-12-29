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
    subscriptionType: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'none'],
        default: 'none'
    },
    isPaid : {
        paid : {type : Boolean, default : false},
        paidType : {type : String, default : 'none'}
    },
    subscriptionDate : {type : String, default : 'none'},
    subscriptionTime : {type : String, default : 'none'},
    projectSubscription : {
        baccarat:{
            projectAccess : { type : Boolean , default: false},
            subscriptionType: {
                type: String,
                enum: ['hourly','daily', 'weekly', 'monthly', 'none'],
                default: 'none'
            },
            subscriptionDate : {type : String, default : null},
            subscriptionTime : {type : String, default : null},
        },
    },
    projectsPlan : {
        project1 : { type : Boolean, default : false },
        project2 : { type : Boolean, default : true },
        project4 : { type : Boolean, default : false },
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    verificationTokenExpiresAt:Date,
    activeSessionToken:String
},{timestamps:true});

userSchema.index({ userEmail:1 });
userSchema.index({ mobileNumber:1 });
userSchema.index({ createdAt: 1 });
userSchema.index({ subscriptionType: 1 }); 
userSchema.index({ "projectSubscription.baccarat.subscriptionType": 1 });

export const userModel = mongoose.model('users', userSchema);
