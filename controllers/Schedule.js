import cron from 'node-cron';
import moment from 'moment-timezone';
import { userModel } from '../DB/models/Users.js';

// Function to check and expire subscriptions
export const checkAndExpireSubscriptions = async () => {
    // console.log('Running subscription expiration check');
    const users = await userModel.find({});
    users.forEach(async (user) => {
        if (user.subscriptionType !== 'none') {
            try {
                // Get the current time in IST (India Standard Time)
                const now = moment().tz('Asia/Kolkata');
                // Combine subscriptionDate and subscriptionTime strings
                let dateStr = `${user.subscriptionDate} ${user.subscriptionTime}`;
                // If subscriptionTime is incomplete (e.g., missing seconds), pad it to 'HH:mm:ss'
                if (!/^\d{2}:\d{2}:\d{2}$/.test(user.subscriptionTime)) {
                    dateStr = `${user.subscriptionDate} ${user.subscriptionTime}:00`;
                }
                // Parse the subscription date and time correctly
                const subscriptionDateTime = moment.tz(dateStr, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');
                // Check if the parsed date is valid
                if (!subscriptionDateTime.isValid()) {
                    throw new Error('Invalid subscription date/time');
                }
                let expiryDate;
                // Calculate the expiration date based on subscription type
                if (user.subscriptionType === 'daily') {
                    expiryDate = moment(subscriptionDateTime).add(1, 'days');
                } else if (user.subscriptionType === 'weekly') {
                    expiryDate = moment(subscriptionDateTime).add(7, 'days');
                } else if (user.subscriptionType === 'monthly') {
                    expiryDate = moment(subscriptionDateTime).add(1, 'months');
                }
                // Log the calculated expiration date for debugging
                // console.log('Calculated Expiry Date:', expiryDate.format('YYYY-MM-DD HH:mm:ss'));
                // If the current time exceeds the expiration date, expire the subscription
                if (now.isAfter(expiryDate)) {
                    console.log(`Subscription expired for user: ${user.userName}`);
                    user.projectsPlan.project1 = false;
                    user.projectsPlan.project2 = false;
                    user.projectsPlan.project4 = false;
                    user.subscriptionType = 'none';  // Reset subscription type to none
                    await user.save();  // Save the updated user
                }
            } catch (error) {
                console.error(`Error processing user ${user.userEmail}:`, error.message);
            }
        }
    });
};

// Schedule the function to run every minute
cron.schedule('* * * * *', checkAndExpireSubscriptions);  // Runs every minute
