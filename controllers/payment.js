import { v4 } from 'uuid'
import { paymentModel } from '../DB/models/payment.js'


let DB = paymentModel



export const listAllPayments = async (req, res) => {
    try {
        let allData = await DB.find({})
        if (allData) {
            res.send(allData)
        } else {
            res.send({ status: false, data: 'problem with getting details' })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
}




// get a  User
export const getSinglePayment = async (req, res) => {
    let { id } = req.params
    try {
        let checkWebinarExists = await DB.findOne({ _id: id });
        if (checkWebinarExists) {
            res.status(200).send({ status: true, data: checkWebinarExists });
        } else {
            res.status(409).send({ status: false, msg: "payment doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};




// Create a new User
export const createNewPayment = async (req, res) => {
    let payload = req.body
    try {
        let createPayment = await DB.create({ ...payload, payment_id: v4() });
        if (createPayment) {
            res.status(200).send({ status: true, data: createPayment });
        } else {
            return res.status(500).send({ status: false, msg: 'Problem while creating payment' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};




// Create a new User
export const updateSinglePayment = async (req, res) => {
    let payload = req.body
    let { id } = req.params
    try {
        let checkWebinarExists = await DB.findOne({ _id: id });
        if (checkWebinarExists) {
            let webinarDataUpdated = await DB.findOneAndUpdate({ _id: id }, { $set: payload }, { new: true })
            if (webinarDataUpdated) {
                res.status(200).send({ status: true, data: webinarDataUpdated });
            } else {
                res.send({ status: false, msg: 'problem with updating webinar details' })
            }
        } else {
            res.status(409).send({ status: false, msg: "webinar doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};



// Create a new User
export const deleteSinglePayment = async (req, res) => {
    let { id } = req.params
    try {
        let checkWebinarExists = await DB.findOne({ _id: id });
        if (checkWebinarExists) {
            let webinarDataUpdated = await DB.findOneAndDelete({ _id: id })
            if (webinarDataUpdated) {
                res.status(200).send({ status: true });
            } else {
                res.send({ status: false, msg: 'problem with delete webinar details' })
            }
        } else {
            res.status(409).send({ status: false, msg: "webinar doesn't exists" })
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Internal Server Error', data: err });
    }
};

