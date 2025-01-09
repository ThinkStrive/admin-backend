import cron from 'node-cron';
import moment from 'moment-timezone';
import { userModel } from '../DB/models/Users.js';
import { paidHistoryModel } from '../DB/models/PaidHistory.js';  
import { sendExpiryEmail } from './Authentication.js';


export const checkAndExpireRouletteSpincycle = async () => {
    const users = await userModel.find({ subscriptionType: { $ne: 'none' } });

    for (const user of users) {
        try {
            const now = new Date();

            const expiryDate = user?.rouletteExpiryDate;
            if (!expiryDate) {
                console.log(`No expiry date found for user: ${user.userEmail} , project: Roulette`);
                continue;
            }

            if (now > expiryDate) { 
                console.log(`Subscription expired for user: ${user.userName} , project: Roulette`);

                try {
                    await sendExpiryEmail(user.userEmail, user.userName, user.subscriptionType , "Data Driven Roulette And Spin Cycle Strategy");
                } catch (emailError) {
                    console.error(`Failed to send expiry email to ${user.userEmail}:`, emailError.message);
                }

                await paidHistoryModel.create({
                    userEmail: user.userEmail,
                    userName: user.userName,
                    subscribedFor: "Roulette",
                    subscriptionType: user.subscriptionType,
                    subscriptionDate: user.subscriptionDate,
                    subscriptionTime: user.subscriptionTime,
                    expiryDate: moment(expiryDate).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'),
                });

                user.projectsPlan.project1 = false;
                user.projectsPlan.project4 = false;
                user.subscriptionType = 'none';
                user.subscriptionDate = 'none';
                user.subscriptionTime = 'none';
                user.rouletteExpiryDate = null;

                await user.save();
            }
        } catch (error) {
            console.error(`Error processing user ${user.userEmail}:`, error.message);
        }
    }
};



export const checkAndExpireBaccarat = async () => {
    const users = await userModel.find({
        'projectSubscription.baccarat': { $exists: true },
        'projectSubscription.baccarat.subscriptionType': { $ne: 'none' }
    });

    for (const user of users) {
        try {
            const now = new Date();

            const expiryDate = user?.projectSubscription?.baccarat?.expiryDate;
            if (!expiryDate) {
                console.log(`No expiry date found for user: ${user.userEmail}, project: Baccarat`);
                continue; 
            }

            if (now > expiryDate) { 
                console.log(`Subscription expired for user: ${user.userName}, project: Baccarat`);

                try {
                    await sendExpiryEmail(user.userEmail, user.userName, user.projectSubscription.baccarat.subscriptionType , "Baccarat");
                } catch (emailError) {
                    console.error(`Failed to send expiry email to ${user.userEmail}:`, emailError.message);
                }

                await paidHistoryModel.create({
                    userName: user.userName,
                    userEmail: user.userEmail,
                    subscribedFor: "Baccarat",
                    subscriptionType: user.projectSubscription.baccarat.subscriptionType,
                    subscriptionDate: user.projectSubscription.baccarat.subscriptionDate,
                    subscriptionTime: user.projectSubscription.baccarat.subscriptionTime,
                    expiryDate: moment(expiryDate).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'),
                });

                user.projectSubscription.baccarat.projectAccess = false;
                user.projectSubscription.baccarat.subscriptionType = 'none';
                user.projectSubscription.baccarat.subscriptionDate = null;
                user.projectSubscription.baccarat.subscriptionTime = null;
                user.projectSubscription.baccarat.expiryDate = null;

                await user.save();

            }
        } catch (error) {
            console.error(`Error processing user ${user.userEmail}, project Baccarat:`, error.message);
        }
    }
};



cron.schedule('* * * * *', checkAndExpireRouletteSpincycle); 
cron.schedule('* * * * *', checkAndExpireBaccarat);



// export const checkAndExpireRouletteSpincycle = async () => {
//     const users = await userModel.find({ subscriptionType: { $ne: 'none' } });

//     for (const user of users) {
//         try {
//             const now = moment().tz('Asia/Kolkata');

//             let dateStr = `${user.subscriptionDate} ${user.subscriptionTime}`;
//             if (!/^\d{2}:\d{2}:\d{2}$/.test(user.subscriptionTime)) {
//                 dateStr = `${user.subscriptionDate} ${user.subscriptionTime}:00`;
//             }

//             const subscriptionDateTime = moment.tz(dateStr, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');
//             if (!subscriptionDateTime.isValid()) {
//                 throw new Error('Invalid subscription date/time');
//             }

//             let expiryDate;
//             switch (user.subscriptionType) {
//                 case 'thirtyMinutes':
//                     expiryDate = moment(subscriptionDateTime).add(30, 'minutes');
//                     break;
//                 case 'daily':
//                     expiryDate = moment(subscriptionDateTime).add(1, 'days');
//                     break;
//                 case 'twoDays':
//                     expiryDate = moment(subscriptionDateTime).add(2, 'days');
//                     break;
//                 case 'weekly':
//                     expiryDate = moment(subscriptionDateTime).add(7, 'days');
//                     break;
//                 case 'monthly':
//                     expiryDate = moment(subscriptionDateTime).add(1, 'months');
//                     break;
//                 default:
//                     throw new Error(`Unknown subscription type: ${user.subscriptionType}`);
//             }

//             if (now.isAfter(expiryDate)) {
//                 console.log(`Subscription expired for user: ${user.userName}`);

//                 try {
//                     await paidHistoryModel.create({
//                         userEmail: user.userEmail,
//                         userName: user.userName,
//                         subscribedFor: "roulette",
//                         subscriptionType: user.subscriptionType,
//                         subscriptionDate: user.subscriptionDate,
//                         subscriptionTime: user.subscriptionTime,
//                         expiryDate: expiryDate.format('YYYY-MM-DD HH:mm:ss'),
//                     });

//                     console.log(`Paid history saved for user: ${user.userName}`);
//                 } catch (saveError) {
//                     console.error(`Error saving paid history for user ${user.userName}:`, saveError.message);
//                 }

//                 // Expire the subscription
//                 user.projectsPlan.project1 = false;
//                 user.projectsPlan.project4 = false;
//                 user.subscriptionType = 'none';

//                 await user.save();
//             }
//         } catch (error) {
//             console.error(`Error processing user ${user.userEmail}:`, error.message);
//         }
//     }
// };



// export const checkAndExpireBaccarat = async () => {
//     const users = await userModel.find({
//         'projectSubscription.baccarat.subscriptionType': { $ne: 'none' },
//         'projectSubscription.baccarat.projectAccess': true
//     });

//     for (const user of users) {
        
//         const now = moment().tz('Asia/Kolkata');
//         const projectKey = 'baccarat';
//         const project = user.projectSubscription[projectKey];

//         try {
//             let dateStr = `${project.subscriptionDate} ${project.subscriptionTime}`;

//             if (!/^\d{2}:\d{2}:\d{2}$/.test(project.subscriptionTime)) {
//                 dateStr = `${project.subscriptionDate} ${project.subscriptionTime}:00`;
//             }

//             const subscriptionDateTime = moment.tz(dateStr, 'YYYY-MM-DD HH:mm:ss', 'Asia/Kolkata');

//             if (!subscriptionDateTime.isValid()) {
//                 throw new Error(`Invalid subscription date/time for project: ${projectKey}`);
//             }

//             let expiryDate;
//             switch (project.subscriptionType) {
//                 case 'thirtyMinutes':
//                     expiryDate = moment(subscriptionDateTime).add(30, 'minutes');
//                     break;
//                 case 'hourly':
//                     expiryDate = moment(subscriptionDateTime).add(1, 'hours');
//                     break;
//                 case 'daily':
//                     expiryDate = moment(subscriptionDateTime).add(1, 'days');
//                     break;
//                 case 'twoDays':
//                     expiryDate = moment(subscriptionDateTime).add(2, 'days');
//                     break;
//                 case 'weekly':
//                     expiryDate = moment(subscriptionDateTime).add(7, 'days');
//                     break;
//                 case 'monthly':
//                     expiryDate = moment(subscriptionDateTime).add(1, 'months');
//                     break;
//                 default:
//                     throw new Error(`Unknown subscription type: ${project.subscriptionType}`);
//             }

//             if (now.isAfter(expiryDate)) {
//                 console.log(`Subscription expired for user: ${user.userName}, project: ${projectKey}`);

//                 try {
//                     await paidHistoryModel.create({
//                         userName: user.userName,
//                         userEmail: user.userEmail,
//                         subscribedFor: projectKey,
//                         subscriptionType: project.subscriptionType,
//                         subscriptionDate: project.subscriptionDate,
//                         subscriptionTime: project.subscriptionTime,
//                         expiryDate: expiryDate.format('YYYY-MM-DD HH:mm:ss')
//                     });

//                     console.log(`Paid history saved for user: ${user.userName}, project: ${projectKey}`);
//                 } catch (error) {
//                     console.error(`Error saving paid history for user ${user.userName}, project ${projectKey}:`, error.message);
//                 }

//                 // Expire the subscription
//                 project.projectAccess = false;
//                 project.subscriptionType = 'none';
//                 project.subscriptionDate = null;
//                 project.subscriptionTime = null;

//                 await user.save();
//             }
//         } catch (error) {
//             console.error(`Error processing user ${user.userEmail}, project ${projectKey}:`, error.message);
//         }
//     }
// };
