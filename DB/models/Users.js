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
    }
});

export const userModel = mongoose.model('users', userSchema);
