import { userModel } from "../DB/models/Users.js";
const DB = userModel;
import { transporter , mailOptions } from "../routes/mail.js";
import { ADMIN_MAIL_TEMPLATE } from "../routes/mailTemplate.js";

export const sendEmailToUsers = async (req, res) => {
    const { status, subject, body } = req.body;

    try {
        let users;

        if (status === "all") {
            users = await DB.find({}).select('userEmail userName');
        } else if (status === "active") {
            users = await DB.find({
                $or: [
                    { subscriptionType: { $in: ['daily', 'twoDays', 'weekly', 'monthly'] } },
                    {
                        $and: [
                            { "projectSubscription.baccarat.subscriptionType": { $exists: true } },
                            { "projectSubscription.baccarat.subscriptionType": { $in: ['daily', 'twoDays', 'weekly', 'monthly'] } }
                        ]
                    }
                ]
            }).select('userEmail userName');
        } else if (['daily', 'twoDays', 'weekly', 'monthly'].includes(status)) {
            users = await DB.find({
                $or: [
                    { subscriptionType: status },
                    {
                        $and: [
                            { "projectSubscription.baccarat.subscriptionType": { $exists: true } },
                            { "projectSubscription.baccarat.subscriptionType": status }
                        ]
                    }
                ]
            }).select('userEmail userName');
        } else {
            return res.status(400).json({ status: false, message: "Invalid status provided" });
        }

        const userEmails = users.map(user => ({
            email: user.userEmail,
            name: user.userName
        }));

        if (userEmails.length === 0) {
            return res.status(200).json({
                status: false,
                message: "No users found in this category!"
            });
        }

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        for (const user of userEmails) {
            const { email, name } = user;
            const htmlBody = ADMIN_MAIL_TEMPLATE(subject, name, body);

            const emailOptions = {
                ...mailOptions,
                to: email,
                subject,
                html: htmlBody
            };

            try {
                await transporter.sendMail(emailOptions); 
                await delay(1300); 
            } catch (err) {
                console.error(`Failed to send email to ${email}:`, err.message);
            }
        }

        res.status(200).json({
            status: true,
            message: `Emails Sent Successfully to ${status} users!`
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed to send emails",
            error: error.message
        });
    }
};
