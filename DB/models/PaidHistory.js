// DB/models/PaidHistory.js
import mongoose from 'mongoose';

const paidHistorySchema = new mongoose.Schema({
    userEmail: { type: String },

    userName: { type: String },

    subscribedFor : { type : String},

    subscriptionType: { type: String },

    subscriptionDate: { type: String },

    subscriptionTime: { type: String },

    expiryDate: { type: String },
    
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

export const paidHistoryModel = mongoose.model('paidHistory', paidHistorySchema);
