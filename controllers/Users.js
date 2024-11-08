import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { userModel } from '../DB/models/Users.js';




// DB
let DB = userModel


// List all users
export const listAllUsers = async (req, res) => {
    try {
        let allUsers = await DB.find({})
        if (allUsers) {
            res.send({status : true, data : allUsers})
        } else {
            res.send({ status: false, data: 'problem with getting details' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
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
    let payload = req.body
    let { id } = req.params
    try {
        let checkUserExists = await DB.findOne({ _id: id });
        if (checkUserExists) {
            // const salt = await bcrypt.genSalt(10);
            // const hash = await bcrypt.hash(payload.password ? payload.password : checkUserExists.password, salt);
            // let updatedData = { ...payload, password: payload.password ? hash : checkUserExists.password }
            let userDataUpdated = await DB.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true })
            if (userDataUpdated) {
                res.status(200).send({ status: true, data: userDataUpdated });
            } else {
                res.send({ status: false, data: 'problem with updating user details' })
            }
        } else {
            res.status(409).send({ status: false, data: "user doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};



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



