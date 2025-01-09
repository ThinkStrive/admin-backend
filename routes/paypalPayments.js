import Express from 'express';
import { ApproveSubscription, checkSubscriptionStatus, CreateSubscription, handleWebhookEvent } from '../controllers/paypalPayments.js';

const paypalRouter = Express.Router();

paypalRouter.post('/create-subscription', CreateSubscription);
paypalRouter.post('/approve-subscription', ApproveSubscription);
paypalRouter.post('/check-subscription-status', checkSubscriptionStatus);
paypalRouter.post('/webhook', handleWebhookEvent);

export default paypalRouter;