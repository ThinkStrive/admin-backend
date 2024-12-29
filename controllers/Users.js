import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { userModel } from '../DB/models/Users.js';
import { sendRoulettePlanActivatedEmail , sendBaccaratPlanActivatedEmail } from './Authentication.js';
import { format } from "date-fns";



// DB
let DB = userModel
const SAFE_FIELDS_TO_EXPORT = "userName userEmail mobileNumber subscriptionType subscriptionDate subscriptionTime expiryDate";

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

        //fetching users (new to old)
        let allUsers = await DB.find(searchFilter).sort({ createdAt: -1}).skip(skip).limit(limit);

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
        res.status(200).json({status:true,message:"user data fetched successfully",data:userDetails});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getUsersByRegistrationTime = async (req,res) => {
    try {
        
        // calculate date offset
        const getOffsetDate = (days) => {
            const date = new Date();
            date.setDate(date.getDate() - days);
            return date;
        };

        const dayAgo = getOffsetDate(1);
        const weekAgo = getOffsetDate(7);
        const monthAgo = getOffsetDate(30);
        const threeMonthsAgo = getOffsetDate(90);
        const sixMonthsAgo = getOffsetDate(180);
        const yearAgo = getOffsetDate(365);

        const usersWithinDay = await DB.find({ createdAt : { $gte: dayAgo}});
        const usersWithinWeek = await DB.find({ createdAt: { $gte: weekAgo}});
        const usersWithinMonth = await DB.find({ createdAt: { $gte: monthAgo}});
        const usersWithinThreeMonths = await DB.find( { createdAt : { $gte: threeMonthsAgo}});
        const usersWithinSixMonths = await DB.find({ createdAt : { $gte : sixMonthsAgo}});
        const usersWithinYear = await DB.find({ createdAt : { $gte: yearAgo}});

        const totalUsersCount = await DB.countDocuments();

        res.status(200).json({
            status:true,
            data:{
                totalUsersCount,
                withinADay: usersWithinDay,
                withinAWeek: usersWithinWeek,
                withinAMonth: usersWithinMonth,
                withinThreeMonths: usersWithinThreeMonths,
                withinSixMonths: usersWithinSixMonths,
                withinAYear: usersWithinYear
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status:false,message:"Internal Server Error", data:error.message});
    }
}


export const filterByProjectSubscriptions = async (req,res) =>{
    try {
        const totalUsersCount = await DB.countDocuments();

        // users with both roulette && baccarat subscriptions
        const baccaratAndRouletteSubscribers = await DB.find({
            subscriptionType:{ $ne: 'none'},
            "projectSubscription.baccarat.subscriptionType": { $exists: true, $ne: 'none'}
        });

        const baccaratSubscribers = await DB.find({
           "projectSubscription.baccarat.subscriptionType": { $exists: true , $ne : 'none'}
        });

        const rouletteSubscribers = await DB.find({
            subscriptionType: { $ne : 'none'}
        });

        const noSubUsersCount = await DB.countDocuments({
            subscriptionType:'none',
            $or:[
                { "projectSubscription.baccarat.subscriptionType " : { $exists: false}},
                { "projectSubscription.baccarat.subscriptionType" : { $ne : 'none'}}
            ]
        });

        res.status(200).json({
            status:true,
            data: {
                totalUsersCount,
                noSubUsersCount,
                baccaratAndRouletteSubscribers,
                baccaratSubscribers,
                rouletteSubscribers
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status:false,
            message:"internal server error",
            data:error.message
        })
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




// update new user

// export const updateSingleUser = async (req, res) => {
//     let payload = req.body;
//     let { id } = req.params;

//     try {
//         // Check if the user exists
//         const checkUserExists = await DB.findOne({ _id: id });
//         if (!checkUserExists) {
//             return res.status(409).send({ status: false, message: "User doesn't exist" });
//         }

//         // Update user details
//         const userDataUpdated = await DB.findOneAndUpdate(
//             { _id: id },
//             { $set: payload },
//             { new: true }
//         );

//         if (!userDataUpdated) {
//             return res.status(500).send({ status: false, message: 'Problem updating user details' });
//         }

//         // Check if the request includes a subscription update
//         if (payload.subscriptionType) {
//             try {
//                 await sendPlanActivatedEmail({
//                     userEmail: userDataUpdated.userEmail,
//                     subscriptionType: payload.subscriptionType,
//                     subscriptionDate: payload.subscriptionDate,
//                 });
//             } catch (emailError) {
//                 console.error('Error sending plan activation email:', emailError);
//             }
//         }

//         // Respond with the updated user data
//         return res.status(200).send({ status: true, data: userDataUpdated });

//     } catch (err) {
//         console.error('Error in updateSingleUser:', err);
//         return res.status(500).send({ status: false, message: 'Internal server error', error: err });
//     }
// };

export const updateSingleUser = async (req, res) => {
    let payload = req.body;
    let { id } = req.params;

    try {
        // Fetch existing user details
        const existingUser = await DB.findOne({ _id: id });
        if (!existingUser) {
            return res.status(409).send({ status: false, message: "User doesn't exist" });
        }

        // Update user details in the database
        const userDataUpdated = await DB.findOneAndUpdate(
            { _id: id },
            { $set: payload },
            { new: true }
        );

        if (!userDataUpdated) {
            return res.status(500).send({ status: false, message: "Problem updating user details" });
        }

        // Mail for Baccarat
        if (payload.projectSubscription?.baccarat?.subscriptionType !== "none") {
            const [projectName, subscriptionDetails] = Object.entries(payload.projectSubscription)[0];
            const existingSubscription = existingUser.projectSubscription?.[projectName];

            if (
                !existingSubscription ||
                existingSubscription.subscriptionType !== subscriptionDetails.subscriptionType ||
                existingSubscription.subscriptionDate !== subscriptionDetails.subscriptionDate ||
                existingSubscription.subscriptionTime !== subscriptionDetails.subscriptionTime
            ) {
                try {
                    await sendBaccaratPlanActivatedEmail({
                        gameName: "Baccarat",
                        userEmail: userDataUpdated.userEmail,
                        subscriptionType: subscriptionDetails.subscriptionType,
                        subscriptionDate: subscriptionDetails.subscriptionDate,
                        subscriptionTime: subscriptionDetails.subscriptionTime
                    });
                } catch (error) {
                    console.error(`Error sending email for ${projectName}:`, error);
                }
            }
        }

        // Mail for Data Driven Roulette and Spin Cycle subscription
        if (
            payload.subscriptionType !== "none" &&
            (payload.subscriptionType !== existingUser.subscriptionType ||
                payload.subscriptionDate !== existingUser.subscriptionDate ||
                payload.subscriptionTime !== existingUser.subscriptionTime)
        ) {
            try {
                await sendRoulettePlanActivatedEmail({
                    gameName: "Data Driven Roulette Tracker and Spin Cycle Stratergy",
                    userEmail: userDataUpdated.userEmail,
                    subscriptionType: payload.subscriptionType,
                    subscriptionDate: payload.subscriptionDate,
                    subscriptionTime: payload.subscriptionTime
                });
            } catch (error) {
                console.error('Error sending email for Data Driven Roulette and Spin Cycle:', error);
            }
        }

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



