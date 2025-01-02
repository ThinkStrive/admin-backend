import cron from 'node-cron';
import moment from 'moment-timezone';
import { userModel } from '../DB/models/Users.js';
import { paidHistoryModel } from '../DB/models/PaidHistory.js';  


export const checkAndExpireRouletteSpincycle = async () => {
    const users = await userModel.find({ subscriptionType: { $ne: 'none' } });

    for (const user of users) {
        try {
            const now = moment().tz('Asia/Kolkata');

            let dateStr = `${user.subscriptionDate} ${user.subscriptionTime}`;
            if (!/^\d{2}:\d{2}:\d{2}$/.test(user.subscriptionTime)) {
                dateStr = `${user.subscriptionDate} ${user.subscriptionTime}:00`;
            }

            const subscriptionDateTime = moment.tz(dateStr, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');
            if (!subscriptionDateTime.isValid()) {
                throw new Error('Invalid subscription date/time');
            }

            let expiryDate;
            switch (user.subscriptionType) {
                case 'daily':
                    expiryDate = moment(subscriptionDateTime).add(1, 'days');
                    break;
                case 'twoDays':
                    expiryDate = moment(subscriptionDateTime).add(2, 'days');
                    break;
                case 'weekly':
                    expiryDate = moment(subscriptionDateTime).add(7, 'days');
                    break;
                case 'monthly':
                    expiryDate = moment(subscriptionDateTime).add(1, 'months');
                    break;
                default:
                    throw new Error(`Unknown subscription type: ${user.subscriptionType}`);
            }

            if (now.isAfter(expiryDate)) {
                console.log(`Subscription expired for user: ${user.userName}`);

                try {
                    await paidHistoryModel.create({
                        userEmail: user.userEmail,
                        userName: user.userName,
                        subscribedFor: "Data Driven Roulette and Spin Cycle",
                        subscriptionType: user.subscriptionType,
                        subscriptionDate: user.subscriptionDate,
                        subscriptionTime: user.subscriptionTime,
                        expiryDate: expiryDate.format('YYYY-MM-DD HH:mm:ss'),
                    });

                    console.log(`Paid history saved for user: ${user.userName}`);
                } catch (saveError) {
                    console.error(`Error saving paid history for user ${user.userName}:`, saveError.message);
                }

                // Expire the subscription
                user.projectsPlan.project1 = false;
                user.projectsPlan.project4 = false;
                user.subscriptionType = 'none';

                await user.save();
            }
        } catch (error) {
            console.error(`Error processing user ${user.userEmail}:`, error.message);
        }
    }
};



export const checkAndExpireBaccarat = async () => {
    const users = await userModel.find({
        'projectSubscription.baccarat.subscriptionType': { $ne: 'none' },
        'projectSubscription.baccarat.projectAccess': true
    });

    for (const user of users) {
        
        const now = moment().tz('Asia/Kolkata');
        const projectKey = 'baccarat';
        const project = user.projectSubscription[projectKey];

        try {
            let dateStr = `${project.subscriptionDate} ${project.subscriptionTime}`;

            if (!/^\d{2}:\d{2}:\d{2}$/.test(project.subscriptionTime)) {
                dateStr = `${project.subscriptionDate} ${project.subscriptionTime}:00`;
            }

            const subscriptionDateTime = moment.tz(dateStr, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');

            if (!subscriptionDateTime.isValid()) {
                throw new Error(`Invalid subscription date/time for project: ${projectKey}`);
            }

            let expiryDate;
            switch (project.subscriptionType) {
                case 'hourly':
                    expiryDate = moment(subscriptionDateTime).add(1, 'hours');
                    break;
                case 'daily':
                    expiryDate = moment(subscriptionDateTime).add(1, 'days');
                    break;
                case 'twoDays':
                    expiryDate = moment(subscriptionDateTime).add(2, 'days');
                    break;
                case 'weekly':
                    expiryDate = moment(subscriptionDateTime).add(7, 'days');
                    break;
                case 'monthly':
                    expiryDate = moment(subscriptionDateTime).add(1, 'months');
                    break;
                default:
                    throw new Error(`Unknown subscription type: ${project.subscriptionType}`);
            }

            if (now.isAfter(expiryDate)) {
                console.log(`Subscription expired for user: ${user.userName}, project: ${projectKey}`);

                try {
                    await paidHistoryModel.create({
                        userName: user.userName,
                        userEmail: user.userEmail,
                        subscribedFor: projectKey,
                        subscriptionType: project.subscriptionType,
                        subscriptionDate: project.subscriptionDate,
                        subscriptionTime: project.subscriptionTime,
                        expiryDate: expiryDate.format('YYYY-MM-DD HH:mm:ss')
                    });

                    console.log(`Paid history saved for user: ${user.userName}, project: ${projectKey}`);
                } catch (error) {
                    console.error(`Error saving paid history for user ${user.userName}, project ${projectKey}:`, error.message);
                }

                // Expire the subscription
                project.projectAccess = false;
                project.subscriptionType = 'none';
                project.subscriptionDate = null;
                project.subscriptionTime = null;

                await user.save();
            }
        } catch (error) {
            console.error(`Error processing user ${user.userEmail}, project ${projectKey}:`, error.message);
        }
    }
};



cron.schedule('* * * * *', checkAndExpireRouletteSpincycle); 
cron.schedule('* * * * *', checkAndExpireBaccarat);