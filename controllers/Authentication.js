import bcrypt from 'bcryptjs'
import { userModel } from "../DB/models/Users.js"
import jwt from "jsonwebtoken";
import axios from 'axios';
import { v4 } from 'uuid';
import { transporter,mailOptions } from '../routes/mail.js';
let DB = userModel

export const userLogin = async (req, res) => {
    const payload = req.body
    try {
        if (!payload.userEmail || !payload.password) {
            return res.status(400).json({ status: false, data: 'Please fill the details' });
        }

        let checkUserEmail = await DB.findOne({ userEmail: payload.userEmail })
        // if (checkUserEmail) {
        //     bcrypt.compare(payload.password, checkUserEmail.password, (err, result) => {
        //         if (!result) {
        //             res.status(401).send({ status: false, data: 'Invalid password' })
        //         } else {
        //             res.send({ status: true, data: checkUserEmail })
        //         }
        //     })
        // } else {
        //     res.status(409).send({ status: false, data: "You don't have an account yet." })
        // }
        if (checkUserEmail) {
                if (checkUserEmail.password !== payload.password) {
                    res.status(401).send({ status: false, data: 'Invalid password' })
                } else {
                    res.send({ status: true, data: checkUserEmail })
                }
        } else {
            res.status(409).send({ status: false, data: "You don't have an account yet." })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}

export const userRegisterVerifyEmail = async (req, res) => {
    const { userEmail, password, userName, mobileNumber } = req.body;

    if (!userEmail || !password || !userName || !mobileNumber) {
        return res.status(402).send({ status: true, data: "please fill the details" });
    }

    if(mobileNumber.length < 10){
        return res.send({status : false, data : 'Please enter valid mobile number'})
    }
    try {
        const checkUserExists = await DB.findOne({ userEmail });
        if(checkUserExists){
            return res.status(402).send({ status: false, data: "Already you have an Account" });
        }
        const verifyToken = jwt.sign(
            { userEmail, password, userName, mobileNumber },
            process.env.JWT_SECRET,
            { expiresIn: "1day" }
        );
        let verifyEmailLink = `${frontend_url}/auth/verifyEmail?verify=${verifyToken}`;
        const mailResponse={...mailOptions,to:userEmail, text:`Hi, please verify your account ${verifyEmailLink}`}
        await transporter.sendMail(mailResponse)
        res.status(200).send({msg:'Please Verify Your Email', status : true, data : userEmail});

    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}



export const userRegister = async (req, res) => {
    const { userEmail, password, userName, mobileNumber } = req.body;

    if (!userEmail || !password || !userName || !mobileNumber) {
        return res.status(402).send({ status: true, data: "please fill the details" });
    }

    if(mobileNumber.length < 10){
        return res.send({status : false, data : 'Please enter valid mobile number'})
    }

    try {
        const checkUserExists = await DB.findOne({ userEmail });
        if(checkUserExists){
            return res.status(402).send({ status: false, data: "Already you have an Account" });
        }

        // const salt = await bcrypt.genSalt(10);
        // const hash = await bcrypt.hash(password, salt);
        
        const createUser = await DB.create({ ...req.body, userId: v4(), role : 'user' });
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
            const createUser = await DB.create({ ...payload, userId: v4(), role : 'user', password : hash });
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
        const validUser = await DB.findOne({ userEmail });

        if (!validUser) {
            return res.status(409).send({ status: false, data: 'Invalid user' })
        }
        const verifyToken = jwt.sign(
            { userEmail },
            process.env.JWT_SECRET,
            { expiresIn: "1day" }
        );
        const data = {
            name: validUser.userName,
            email: validUser.userEmail,
            // number: validUser.mobile_number,
            reset_link: `${frontend_url}/auth/resetPassword?verify=${verifyToken}`
        };
        try {
            // const mailResponse = await axios.post(SEND_MAIL_FOR_USER_FORGOT_PASSWORD, data);

            const mailResponse={...mailOptions,to:userEmail, text:`Hi, please click the link below to confirm your account ${data.reset_link}`}
            await transporter.sendMail(mailResponse)
            res.status(200).send({msg:'your account has been verified'});

            if (mailResponse.data.success) {
                return res.status(201).send({ status: true });
            } else {
                return res.status(403).send({ status: false, data: 'Failed to send mail' });
            }
        } catch (mailError) {
            console.log(mailError);
            return res.status(500).send({ status: false, data: 'Failed to send mail' });
        }
    } catch (err) {
        res.status(500).send(err);
    }
}






export const userResetPassword = async (req, res) => {
    const { verifyToken, password } = req.body;

    try {
        // Verify the token
        const decoded = jwt.verify(verifyToken, process.env.JWT_SECRET);
        const userEmail = decoded.userEmail;

        const validUser = await DB.findOne({ userEmail });

        if (!validUser) {
            return res.status(409).send({ status: false, data: 'Invalid user' });
        }

        // Hash the new password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);

        // Update the user's password
        validUser.password = password;
        await validUser.save();

        return res.status(200).send({ status: true, data: 'Password reset successful' });
    } catch (err) {
        console.log(err);
        if (err.name === 'TokenExpiredError') {
            return res.status(400).send({ status: false, data: 'Token expired' });
        }
        return res.status(500).send({ status: false, data: 'Internal Server Error' });
    }
};


