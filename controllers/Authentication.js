import bcrypt from 'bcryptjs'
import { userModel } from "../DB/models/Users.js"
import jwt from "jsonwebtoken";
import axios from 'axios';
import { v4 } from 'uuid';
import { transporter, mailOptions } from '../routes/mail.js';
import { EMAIL_VERIFIED_WELCOME_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE,ROULETTE_PLAN_ACTIVATED_SUCCESS_TEMPLATE , BACCARAT_PLAN_ACTIVATED_SUCCESS_TEMPLATE , PLAN_EXPIRED_TEMPLATE } from '../routes/mailTemplate.js';
import dotenv from 'dotenv'
import { generateEmailOTP } from '../utils/generateEmailOTP.js';
let DB = userModel

// Config
dotenv.config()

//AUTH FLOW WITHOUT HASHED PASSWORD

export const userLogin = async (req, res) => {
    const { userEmail , password } = req.body
    try {
        if (!userEmail || !password) {
            return res.status(400).json({ status: false, data: 'Please fill the details' });
        }
        // finding user By Email Id
        let user = await DB.findOne({ userEmail });

        if(!user){
            return res.status(404).json({status:false,data:"No account found!"})
        }

        if (!user.isVerified) {
                const verificationToken = generateEmailOTP();

                user.verificationToken=verificationToken;
                user.verificationTokenExpiresAt=Date.now() + 24 * 60 * 60 * 1000; // 24 hours

                await user.save();


                // Prepare email options
                const mailResponse = {
                    ...mailOptions,
                    to: userEmail,
                    subject: "Verify your email",
                    html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
                };

                // Send email
                await transporter.sendMail(mailResponse);
                return res.status(400).json({ status: false, data: 'Please verify your email' });
            }

            if (user.password !== password) {
                return res.status(401).send({ status: false, data: 'Invalid password' })
            }

            return res.json({
                status:true,
                data:user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}

export const validateSession = async (req,res)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({status:false,data:"Unauthorized:Login Again!"});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await DB.findById(decoded.userId);

        if(!user || user.activeSessionToken !== token){
            return res.status(401).json({status:false,data:"Unauthorized: Invalid Session"});
        }

        return res.json({status:true,data:"Session is Valid"});
    } catch (error) {
        return res.status(401).json({status:false,data:"Unauthorized : Invalid Token"});
    }
}


// export const userRegisterVerifyEmail = async (req, res) => {
//     const { userEmail, password, userName, mobileNumber } = req.body;

//     if (!userEmail || !password || !userName || !mobileNumber) {
//         return res.status(402).send({ status: true, data: "please fill the details" });
//     }

//     if (mobileNumber.length < 10) {
//         return res.send({ status: false, data: 'Please enter valid mobile number' })
//     }
//     try {
//         const checkUserExists = await DB.findOne({ userEmail });
//         if (checkUserExists) {
//             return res.status(402).send({ status: false, data: "Already you have an Account" });
//         }
//         const verifyToken = jwt.sign(
//             { userEmail, password, userName, mobileNumber },
//             process.env.JWT_SECRET,
//             { expiresIn: "1day" }
//         );
//         let verifyEmailLink = `${frontend_url}/auth/verifyEmail?verify=${verifyToken}`;

//         // Prepare email options
//         const mailResponse = {
//             ...mailOptions,
//             to: userEmail,
//             subject: "Reset your Password",
//             text: `Hi, please verify your account: ${verifyEmailLink}`,
//             // html: VERIFICATION_EMAIL_TEMPLATE.replace("{resetURL}", data.reset_link)
//         };

//         // Send email
//         await transporter.sendMail(mailResponse);
//         res.status(200).send({ msg: 'Please Verify Your Email', status: true, data: userEmail });

//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({ msg: 'Internal Server Error', data: err });
//     }
// }

export const userRegister = async (req, res) => {
    const { userEmail, password, userName, mobileNumber } = req.body;

    if (!userEmail || !password || !userName || !mobileNumber) {
        return res.status(402).send({ status: true, data: "please fill the details" });
    }

    if (mobileNumber.length < 10) {
        return res.send({ status: false, data: 'Please enter valid mobile number' })
    }

    try {
        const checkUserExists = await DB.findOne({ userEmail });
        if (checkUserExists) {
            return res.status(402).send({ status: false, data: "Already you have an Account" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = generateEmailOTP();        

        const createUser = await DB.create({
            ...req.body,
            password,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
            userId: v4(),
            role: 'user'
        });

        // Prepare email options
        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken)
        };

        // Send email
        await transporter.sendMail(mailResponse);

        if (createUser) {
            res.status(201).send({ status: true, data: createUser });
        } else {
            return res.status(500).send({ status: false, data: 'Problem while creating user' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}

export const userRegisterVerifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await DB.findOne({
            // userEmail,
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid or expired verification code' });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save();

        // Prepare email options
        const mailResponse = {
            ...mailOptions,
            to: user.userEmail,
            subject: "Email Verification Successful",
            html: EMAIL_VERIFIED_WELCOME_TEMPLATE.replace("{name}", user.userName),
        };

        // Send email
        await transporter.sendMail(mailResponse);

        res.status(200).json(
            {
                success: true,
                message: 'Email verified successfully',
                user: {
                    ...user._doc,
                    password: undefined,
                }
            }
        );

    } catch (error) {
        console.log(`Error sending verification email: ${error}`);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const userLoginGoogle = async (req, res) => {
    const payload = req.body
    try {
        let checkUserEmail = await DB.findOne({ userEmail: payload.userEmail })
        if (checkUserEmail) {
            res.send({ status: true, data: checkUserEmail })
            if (checkUserEmail.profile === null) {
                checkUserEmail.profile = profile
                await checkUserEmail.save()
            }
        } else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(payload.password, salt);
            const createUser = await DB.create({ ...payload, userId: v4(), role: 'user', password: hash });
            if (createUser) {
                res.status(200).send({ status: true, data: createUser });
            } else {
                return res.status(500).send({ status: false, data: 'Problem while creating user' });
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}

export const userForgotPassword = async (req, res) => {
    const { userEmail } = req.body;

    try {
        // Find user by email
        const validUser = await DB.findOne({ userEmail });
        if (!validUser) {
            return res.status(409).send({ status: false, message: 'Invalid user' });
        }

        // Generate token for password reset
        const verifyToken = jwt.sign(
            { userEmail },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }  // Fixed expiration format to "1d" for one day
        );

        const data = {
            name: validUser.userName,
            email: validUser.userEmail,
            reset_link: `${process.env.FE_URL}/auth/resetPassword?verify=${verifyToken}`
        };

        // console.log("data", data.reset_link);

        // Prepare email options
        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: "Reset your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", data.reset_link)
        };

        // Send email
        await transporter.sendMail(mailResponse);
        return res.status(200).send({ status: true, message: 'Password reset email sent successfully' });

    } catch (error) {
        console.error("Error in userForgotPassword:", error);
        return res.status(500).send({ status: false, message: 'Internal server error' });
    }
};

// export const userForgotPassword = async (req, res) => {
//     const { userEmail } = req.body;
//     try {
//         const validUser = await DB.findOne({ userEmail });

//         if (!validUser) {
//             return res.status(409).send({ status: false, data: 'Invalid user' })
//         }
//         const verifyToken = jwt.sign(
//             { userEmail },
//             process.env.JWT_SECRET,
//             { expiresIn: "1day" }
//         );
//         const data = {
//             name: validUser.userName,
//             email: validUser.userEmail,
//             // number: validUser.mobile_number,
//             reset_link: `${frontend_url}/auth/resetPassword?verify=${verifyToken}`
//         };

//         try {
//             // const mailResponse = await axios.post(SEND_MAIL_FOR_USER_FORGOT_PASSWORD, data);

//             const mailResponse = {
//                 ...mailOptions, 
//                 to: userEmail,
//                 text: `Hi, please click the link below to confirm your account ${data.reset_link}`,
//                 // subject: "Reset your Password",
//                 // html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", data.reset_link),
//                 // category: "Password Reset"
//                     }
//             await transporter.sendMail(mailResponse)
//             res.status(200).send({msg:'your account has been verified'});

//             if (mailResponse.data.success) {
//                 return res.status(201).send({ status: true });
//             } else {
//                 return res.status(403).send({ status: false, data: 'Failed to send mail' });
//             }
//         } catch (mailError) {
//             console.log(mailError);
//             return res.status(500).send({ status: false, data: 'Failed to send mail' });
//         }
//     } catch (err) {
//         res.status(500).send(err);
//     }
// }

export const userResetPassword = async (req, res) => {
    const { verifyToken, password } = req.body;

    try {
        if (!verifyToken || !password) {
            return res.status(400).json({ status: false, data: 'Please fill the details' });
        }
        // Verify the token
        const decoded = jwt.verify(verifyToken, process.env.JWT_SECRET);
        const userEmail = decoded.userEmail;

        const validUser = await DB.findOne({ userEmail });

        if (!validUser) {
            return res.status(409).send({ status: false, data: 'Invalid user' });
        }

        // Hash the new password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password
        validUser.password = password;
        await validUser.save();

        // Prepare email options
        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: "Reset Password Successful",
            // text: `Hi ${data.name}, please click the link below to reset your password: ${data.reset_link}`,
            html: PASSWORD_RESET_SUCCESS_TEMPLATE
        };

        // Send email
        await transporter.sendMail(mailResponse);

        return res.status(200).send({ status: true, data: 'Password reset successful' });
    } catch (err) {
        console.log(err);
        if (err.name === 'TokenExpiredError') {
            return res.status(400).send({ status: false, data: 'Token expired' });
        }
        return res.status(500).send({ status: false, data: 'Internal Server Error' });
    }
};

export const userDelete = async (req, res) => {
    const { userEmail } = req.body;
    try {
        const deleteUser = await DB.deleteOne({ userEmail });
        if (deleteUser) {
            res.status(200).send({ status: true, data: deleteUser, message: "User deleted" });
        } else {
            return res.status(500).send({ status: false, data: 'Problem while deleting user' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}


// plan activated successfully Mail 

export const sendRoulettePlanActivatedEmail = async ({
    gameName,
    userEmail,
    subscriptionType,
    subscriptionDate,
    subscriptionTime,
}) => {
    try {
        // Find user by email
        const validUser = await DB.findOne({ userEmail });
        if (!validUser) {
            throw new Error('Invalid user');
        }

        const data = {
            name: validUser.userName,
            email: validUser.userEmail,
            subscribed_game: gameName,
            plan_type: (subscriptionType === 'twoDays') ? "48 Hours" : (subscriptionType === 'thirtyMinutes') ? "30 Minutes" : subscriptionType,
            activation_date: subscriptionDate,
            activation_time: subscriptionTime
        };

        const emailTemplate = ROULETTE_PLAN_ACTIVATED_SUCCESS_TEMPLATE
            .replace('[SUBSCRIPTION_TYPE]', data.plan_type)
            .replace('[ACTIVATED_DATE]', data.activation_date)
            .replace('[ACTIVATED_TIME]',data.activation_time)
            .replace('[GAME_NAME]', data.subscribed_game)
            .replace('[USER_NAME]',data.name)
        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: `${data.subscribed_game} - ${data.plan_type} Plan is Activated Successfully`,
            html: emailTemplate,
        };

        // Send email
        await transporter.sendMail(mailResponse);
        console.log('Plan activation email sent successfully.');
    } catch (error) {
        console.error('Error in sendPlanActivatedEmail:', error);
        throw error; 
    }
};

export const sendBaccaratPlanActivatedEmail = async ({
    gameName,
    userEmail,
    subscriptionType,
    subscriptionDate,
    subscriptionTime,
}) => {
    try {
        // Find user by email
        const validUser = await DB.findOne({ userEmail });
        if (!validUser) {
            throw new Error('Invalid user');
        }

        const data = {
            name: validUser.userName,
            email: validUser.userEmail,
            subscribed_game: gameName,
            plan_type: (subscriptionType === 'twoDays') ? "48 Hours" : (subscriptionType === 'thirtyMinutes') ? "30 Minutes" : subscriptionType,
            activation_date: subscriptionDate,
            activation_time: subscriptionTime
        };

        const emailTemplate = BACCARAT_PLAN_ACTIVATED_SUCCESS_TEMPLATE
        .replace('[SUBSCRIPTION_TYPE]', data.plan_type)
        .replace('[ACTIVATED_DATE]', data.activation_date)
        .replace('[ACTIVATED_TIME]',data.activation_time)
        .replace('[GAME_NAME]', data.subscribed_game)
        .replace('[USER_NAME]',data.name)

        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: `${data.subscribed_game} - ${data.plan_type} Plan is Activated Successfully`,
            html: emailTemplate,
        };

        // Send email
        await transporter.sendMail(mailResponse);
        console.log('Plan activation email sent successfully.');
    } catch (error) {
        console.error('Error in sendPlanActivatedEmail:', error);
        throw error; 
    }
};

export const sendExpiryEmail = async (userEmail, userName, planName , gameName) => {
    try {
        const subject = `Subscription Has Expired For : ${gameName}`;
        const emailTemplate = PLAN_EXPIRED_TEMPLATE(subject, userName, gameName, planName);

        const mailResponse = {
            ...mailOptions,
            to: userEmail,
            subject: subject,
            html: emailTemplate,
        };

        await transporter.sendMail(mailResponse);
        console.log(`Expiry email sent successfully to ${userEmail}`);
    } catch (error) {
        console.error(`Error sending expiry email to ${userEmail}:`, error);
        throw error;
    }
};
