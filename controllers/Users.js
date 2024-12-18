import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { userModel } from '../DB/models/Users.js';
import { sendPlanActivatedEmail } from './Authentication.js';
import { format } from "date-fns";



// DB
let DB = userModel
const SAFE_FIELDS_TO_EXPORT = "userName userEmail mobileNumber subscriptionType subscriptionDate subscriptionTime expiryDate";

const formatSubscriptionTime = (timeString) =>{
    const [hours,minutes,seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours,minutes,seconds);
    return format(date,"hh:mm a");
}


// List all users
export const listAllUsers = async (req, res) => {
    // pagination
    let page = parseInt(req.query.page) || 1 ;
    let limit = parseInt(req.query.limit) || 50 ;
    limit = (limit > 50) ? 50 : limit;
    let skip = (page - 1) * limit ;

    // search Query 
    const searchQuery = req.query.search || '';
    let searchFilter = {};

    if(searchQuery) {
        searchFilter = {
            $or:[
                { userEmail : { $regex:searchQuery, $options:'i'}},
                { mobileNumber : { $regex:searchQuery}}
            ]
        }
    }

    try {
        // total document count
        let totalCount = await DB.countDocuments(searchFilter);

        let allUsers = await DB.find(searchFilter).skip(skip).limit(limit);
        if (allUsers) {
            res.send({
            status : true,
            data : allUsers,
            totalCount
        })
        } else {
            res.send({ status: false, data: 'problem with getting details' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}

// downloadable users data
export const getUserDocs = async (req,res)=>{
    try {
        const userDetails = await DB.find({}).select(`${SAFE_FIELDS_TO_EXPORT} -_id`).lean();

        const formattedData = userDetails.map(user=>({
            Name:user.userName,
            Email:user.userEmail,
            Mobile:user.mobileNumber,
            "Subscription Type":user.subscriptionType,
            "Subscription Date":user.subscriptionDate && user.subscriptionDate !== "none"?
            format(new Date(user.subscriptionDate),"dd-MM-yyyy") : "N/A",
            "Subscription Time":user.subscriptionTime && user.subscriptionTime !== "none" ?
            formatSubscriptionTime(user.subscriptionTime) : "N/A",
            "Expiry Date":user.expiryDate && user.expiryDate !== "none" ?
            format(new Date(user.expiryDate),"dd-MM-yyyy hh:mm a") : "N/A"
        }))
        res.status(200).json({status:true,message:"user data fetched successfully",data:formattedData});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}


// get a  User
export const getSingleUser = async (req, res) => {
    let { id } = req.params
    try {
        let checkUserExists = await DB.findOne({ _id: id });
        if (checkUserExists) {
            res.status(200).send({ status: true, data: checkUserExists });
        } else {
            res.status(409).send({ status: false, msg: "user doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};




// Create a new User
export const createNewUser = async (req, res) => {
    const { userEmail, password, userName, mobileNumber } = req.body;
    if (!userEmail || !password || !userName || !mobileNumber) {
        return res.status(402).send({ status: false, data: "please fill the details" });
    }
    try {
        const checkUserExists = await DB.findOne({ userEmail });
        if (checkUserExists) {
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
};




// Create a new User

export const updateSingleUser = async (req, res) => {
    let payload = req.body;
    let { id } = req.params;

    try {
        // Check if the user exists
        const checkUserExists = await DB.findOne({ _id: id });
        if (!checkUserExists) {
            return res.status(409).send({ status: false, message: "User doesn't exist" });
        }

        // Update user details
        const userDataUpdated = await DB.findOneAndUpdate(
            { _id: id },
            { $set: payload },
            { new: true }
        );

        if (!userDataUpdated) {
            return res.status(500).send({ status: false, message: 'Problem updating user details' });
        }

        // Check if the request includes a subscription update
        if (payload.subscriptionType) {
            try {
                await sendPlanActivatedEmail({
                    userEmail: userDataUpdated.userEmail,
                    subscriptionType: payload.subscriptionType,
                    subscriptionDate: payload.subscriptionDate,
                });
            } catch (emailError) {
                console.error('Error sending plan activation email:', emailError);
            }
        }

        // Respond with the updated user data
        return res.status(200).send({ status: true, data: userDataUpdated });

    } catch (err) {
        console.error('Error in updateSingleUser:', err);
        return res.status(500).send({ status: false, message: 'Internal server error', error: err });
    }
};


















// export const updateSingleUser = async (req, res) => {
//     let payload = req.body
//     let { id } = req.params
//     try {
//         let checkUserExists = await DB.findOne({ _id: id });
//         if (checkUserExists) {
//             // const salt = await bcrypt.genSalt(10);
//             // const hash = await bcrypt.hash(payload.password ? payload.password : checkUserExists.password, salt);
//             // let updatedData = { ...payload, password: payload.password ? hash : checkUserExists.password }
//             let userDataUpdated = await DB.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true })
//             if (userDataUpdated) {
//                 res.status(200).send({ status: true, data: userDataUpdated });
//             } else {
//                 res.send({ status: false, data: 'problem with updating user details' })
//             }
//         } else {
//             res.status(409).send({ status: false, data: "user doesn't exists" })
//         }
//     } catch (err) {
//         console.log(err);
//         return res.status(500).send({ msg: 'Internal Server Error', data: err });
//     }
// };



// Create a new User
export const deleteSingleUser = async (req, res) => {
    let { id } = req.params
    try {
        let checkUserExists = await DB.findOne({ _id: id });
        if (checkUserExists) {
            let userDataUpdated = await DB.findOneAndDelete({ _id: id })
            if (userDataUpdated) {
                res.status(200).send({ status: true });
            } else {
                res.status(409).send({ status: false, data: 'problem with updating user details' })
            }
        } else {
            res.status(409).send({ status: false, data: "user doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};



