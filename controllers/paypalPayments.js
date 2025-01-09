import { SUBSCRIPTION_PLANS , PAYPAL_LIVE_URL , PAYPAL_TEST_URL } from "../utils/constants.js";
import axios from 'axios';
import { userModel } from "../DB/models/Users.js";
import { paymentModel } from "../DB/models/payment.js";
import moment from 'moment-timezone';
import { sendBaccaratPlanActivatedEmail, sendRoulettePlanActivatedEmail } from "./Authentication.js";
import { calculateExpiryDate } from "../utils/helpers.js";

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
const CLIENT_WEBHOOK_ID = process.env.PAYPAL_CLIENT_WEBHOOK_ID;


let cachedToken = null;
let tokenExpiry = null;
const DB = userModel;

const getAccessToken = async () => {
  if (cachedToken && tokenExpiry > Date.now()) {
    return cachedToken;
  }

  try {
    const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
    const response = await axios.post(`${PAYPAL_LIVE_URL}/v1/oauth2/token`, 'grant_type=client_credentials', {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    cachedToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000;
    return cachedToken;
  } catch (error) {
    console.error('Error fetching PayPal access token:', error.response?.data || error.message);
    throw new Error('Failed to fetch PayPal access token');
  }
};

const sendSubscriptionEmail = async (userEmail, subscriptionType, subscriptionFor, subscriptionDate, subscriptionTime) => {
  try {
    if ( subscriptionFor === 'roulette'){
      await sendRoulettePlanActivatedEmail({
        gameName: "Data Driven Roulette Tracker and Spin Cycle Strategy",
        userEmail,
        subscriptionType,
        subscriptionDate,
        subscriptionTime,
    });
    }else if( subscriptionFor === 'baccarat'){
      await sendBaccaratPlanActivatedEmail({
        gameName: "Baccarat",
        userEmail,
        subscriptionType,
        subscriptionDate,
        subscriptionTime,
    });
    }
    
  } catch (error) {
    console.error(`Error sending Activation email for ${subscriptionFor} email:`, error);
  }
}


export const CreateSubscription = async (req, res) => {
  try {
    const { subFor , subType , return_url, cancel_url } = req.body;

    if (!subFor || !subType || !return_url || !cancel_url) {
      return res.status(400).json({
        message: 'Missing required fields: subFor , subType, return_url, cancel_url',
      });
    }

    const selected_plan = SUBSCRIPTION_PLANS.find(plan=> plan.subFor === subFor && plan.subType === subType);
    const plan_id = selected_plan ? selected_plan.planID : null ;

    if (!plan_id) {
      return res.status(400).json({
        message: `Plan not found for: ${subFor}-${subType}. Please verify plan name and duration.`,
      });
    }

    const access_token = await getAccessToken();

    const response = await axios.post(
      `${PAYPAL_LIVE_URL}/v1/billing/subscriptions`,
      {
        plan_id,
        application_context: {
          return_url,
          cancel_url,
          user_action: 'SUBSCRIBE_NOW',
          payment_method: {
            // payer_selected: 'PAYPAL',npm 
            payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { id: subscription_id, links, status } = response.data;

    console.log("Subscription ID:", subscription_id);

    if (status !== 'APPROVAL_PENDING') {
      return res.status(500).json({
        message: 'Failed to create subscription',
        status,
      });
    }

    const approval_url = links.find((link) => link.rel === 'approve')?.href;

    return res.json({ subscription_id, approval_url });
  } catch (error) {
    console.error('Error creating subscription:', error.response?.data || error.message);

    const status = error.response?.status || 500;
    const errorMessage = error.response?.data || error.message;

    return res.status(status).json({ message: 'Error creating subscription', error: errorMessage });
  }
};

// To update user model
const updateUserModel = async (userEmail, subscriptionType, subscriptionFor, subscriptionDate, subscriptionTime) => {
  const user = await DB.findOne({ userEmail });

  if (!user) {
      return res.status(404).json({ message: 'User not found' });
  }

  const updateData = {};

  const subscriptionDateTime = moment.tz(`${subscriptionDate} ${subscriptionTime}`, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');
  const expiryDate = calculateExpiryDate(subscriptionType, subscriptionDateTime);

  if (subscriptionFor === 'roulette') {
      updateData['projectsPlan.project1'] = true;
      updateData['projectsPlan.project4'] = true;
      updateData['subscriptionType'] = subscriptionType;
      updateData['subscriptionDate'] = subscriptionDate;
      updateData['subscriptionTime'] = subscriptionTime;
      updateData['rouletteExpiryDate'] = expiryDate;

  } else if (subscriptionFor === 'baccarat') {
      updateData['projectSubscription.baccarat.projectAccess'] = true;
      updateData['projectSubscription.baccarat.subscriptionType'] = subscriptionType;
      updateData['projectSubscription.baccarat.subscriptionDate'] = subscriptionDate;
      updateData['projectSubscription.baccarat.subscriptionTime'] = subscriptionTime;
      updateData['projectSubscription.baccarat.expiryDate'] = expiryDate;

  }

  await DB.updateOne({ userEmail }, { $set: updateData });
};



export const ApproveSubscription = async (req, res) => {
  try {
    const { subscriptionID, userEmail } = req.body;

    if (!subscriptionID || !userEmail) {
      return res.status(400).json({ message: 'subscription ID or user email is missing' });
    }

    const access_token = await getAccessToken();

    const response = await axios.get(`${PAYPAL_LIVE_URL}/v1/billing/subscriptions/${subscriptionID}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    const subscription = response.data;

    const paypalTimestamp = subscription.billing_info?.last_payment?.time;
    const localTime = paypalTimestamp
      ? moment(paypalTimestamp).tz('Asia/Kolkata')
      : moment().tz('Asia/Kolkata');

    const subscriptionDate = localTime.format('YYYY-MM-DD');
    const subscriptionTime = localTime.format('HH:mm:ss');


    const matchedPlan = SUBSCRIPTION_PLANS.find(plan => plan.planID === subscription.plan_id);
    if (!matchedPlan) {
      return res.status(400).json({ message: 'Plan not found for the given subscription ID' });
    }

    const subscriptionType = matchedPlan.subType;
    const subscriptionFor = matchedPlan.subFor;

    const paymentData = {
      payment_id: subscription.id,
      payment_status: subscription.status,
      roulette_rise_email: userEmail,
      date: subscriptionDate,
      time: subscriptionTime,
      subscription_for: subscriptionFor,
      subscription_type: subscriptionType,
      amount: subscription.billing_info?.last_payment?.amount?.value || '0.0',
      paypal_name:`${subscription.subscriber.name.given_name} ${subscription.subscriber.name.surname}`,
      paypal_email: subscription.subscriber.email_address,
      paypal_payer_id: subscription.subscriber.payer_id,
    };

    await paymentModel.create(paymentData);

    if (subscription.status === 'ACTIVE') {
      console.log('Subscription approved and active');
      await updateUserModel( userEmail , subscriptionType , subscriptionFor , subscriptionDate , subscriptionTime);
      await sendSubscriptionEmail( userEmail , subscriptionType , subscriptionFor , subscriptionDate , subscriptionTime );
    }

    return res.status(200).json({
      message: 'Subscription details saved',
      status: subscription.status,
      subscription
    });
  } catch (error) {
    console.error('Error approving subscription:', error.response?.data || error.message);

    const status = error.response?.status || 500;
    const errorMessage = error.response?.data || error.message;

    return res.status(status).json({ message: 'Error approving subscription', error: errorMessage });
  }
};

export const checkSubscriptionStatus = async ( req,res ) => {
  try {
    const { subscriptionID , userEmail } = req.body;
    if( !subscriptionID || !userEmail){
      return res.status(400).json({ message: 'subscription ID or user email is missing'});
    }

    const access_token = await getAccessToken();

    const response = await axios.get(`${PAYPAL_LIVE_URL}/v1/billing/subscriptions/${subscriptionID}`,{
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    const subscription = response?.data;

    const matchedPlan = SUBSCRIPTION_PLANS.find(plan => plan.planID === subscription.plan_id);
    if(!matchedPlan) {
      return res.status(400).json ( { message: 'Plan not found for the given subscription ID'})
    }

    const subscriptionType = matchedPlan.subType;
    const subscriptionFor = matchedPlan.subFor;

    const paypalTimestamp = subscription.billing_info?.last_payment?.time;
    const localTime = paypalTimestamp
      ? moment(paypalTimestamp).tz('Asia/Kolkata')
      : moment().tz('Asia/Kolkata');

    const subscriptionDate = localTime.format('YYYY-MM-DD');
    const subscriptionTime = localTime.format('HH:mm:ss');

    if( subscription.status === 'ACTIVE'){
      await updateUserModel(userEmail, subscriptionType, subscriptionFor, subscriptionDate, subscriptionTime);
      await sendSubscriptionEmail( userEmail , subscriptionType , subscriptionFor , subscriptionDate , subscriptionTime );
    }

    return res.json({ status: subscription.status});
  } catch (error) {
    console.error('Error checking subscription status:', error.response?.data || error.message);
    return res.status(500).json({ message: 'Error checking subscription status', error: error.message });
  }
};

export const handleWebhookEvent = async ( req , res ) => {
  try {
    const event = req.body;

    const access_token = await getAccessToken();

    const response = await axios.post(`${PAYPAL_LIVE_URL}/v1/notifications/verify-webhook-signature`, {
      transmission_id: req.headers['paypal-transmission-id'],
      transmission_time: req.headers['paypal-transmission-time'],
      transmission_sig: req.headers['paypal-transmission-sig'],
      cert_url: req.headers['paypal-cert-url'],
      auth_algo: req.headers['paypal-auth-algo'],
      webhook_id: CLIENT_WEBHOOK_ID,
      webhook_event: event,
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data.verification_status !== 'SUCCESS') {
      return res.status(400).json({ message: 'Webhook verification failed' });
    }

    switch (event.event_type) {
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
      case 'BILLING.SUBSCRIPTION.UPDATED':
        await handleSubscriptionUpdate(event.resource);
        break;
      default:
        console.log(`Unhandled event type: ${event.event_type}`);
    }

    res.status(200).json({ message: 'Webhook received' });
  } catch (error) {
    console.error('Error handling webhook event:', error);
    res.status(500).json({ message: 'Error handling webhook event', error: error.message });
  }
};


const handleSubscriptionUpdate = async (subscription) => {
  const payment = await paymentModel.findOne({ payment_id: subscription.id });

  if (!payment) {
    console.error('Payment not found for subscription ID:', subscription.id);
    return;
  }

  const userEmail = payment.roulette_rise_email;

  if (subscription.status === 'ACTIVE') {
    const matchedPlan = SUBSCRIPTION_PLANS.find(plan => plan.planID === subscription.plan_id);
    if (!matchedPlan) {
      console.error('Plan not found for the given subscription ID:', subscription.plan_id);
      return;
    }

    const subscriptionType = matchedPlan.subType;
    const subscriptionFor = matchedPlan.subFor;

    const paypalTimestamp = subscription.billing_info?.last_payment?.time;
    const localTime = paypalTimestamp
      ? moment(paypalTimestamp).tz('Asia/Kolkata')
      : moment().tz('Asia/Kolkata');

    const subscriptionDate = localTime.format('YYYY-MM-DD');
    const subscriptionTime = localTime.format('HH:mm:ss');

    await updateUserModel(userEmail, subscriptionType, subscriptionFor, subscriptionDate, subscriptionTime);
    await sendSubscriptionEmail( userEmail , subscriptionType , subscriptionFor , subscriptionDate , subscriptionTime );
  }

  await paymentModel.updateOne({ payment_id: subscription.id }, { $set: { payment_status: subscription.status } });
};
