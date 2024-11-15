import { Feedback } from "../DB/models/Feedback.js"

export const createFeedback = async (req, res) => {
    try {
      const feedbackData = req.body; // Assuming you get data from req.body
  
      const feedback = new Feedback(feedbackData);
      await feedback.save();
  
      res.status(201).json({ message: 'Feedback saved successfully', feedback });
    } catch (error) {
      res.status(500).json({ message: 'Error saving feedback', error });
    }
  };

export const getFeedback = async (req, res) => {
    try {
      const feedback = await Feedback.find();
      res.status(200).json(feedback);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching feedback', error });
    }
  };