import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  Afeedback: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: "", // or make this required if needed
  },
  features: {
    type: String,
    required: true,
  },
  followUp: {
    type: String,
    enum: ["Yes", "No"], // restricts to Yes or No
    required: true,
  },
  improve: {
    type: String,
    required: true,
  },
  issues: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  ratingNav: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  selectedOptions: {
    type: [String], // Array of strings
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

export const Feedback = mongoose.model('Feedback', feedbackSchema);


