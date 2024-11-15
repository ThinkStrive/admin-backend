import Express from 'express';
import { createFeedback, getFeedback} from '../controllers/Feedback.js';

export const feedbackRoutes = Express.Router()

feedbackRoutes.post('/', createFeedback);

feedbackRoutes.get('/get', getFeedback);