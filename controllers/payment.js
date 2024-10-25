import { v4 } from 'uuid'
import { paymentModel } from '../DB/models/payment.js'
import paypal from 'paypal-rest-sdk'

let DB = paymentModel


paypal.configure({
    'mode': 'live', // Use 'sandbox' for testing, 'live' for production
    'client_id': 'AR0L1jVLP_gPz_AUeMxSsXitN3Ims-tSYIZMavltemy6HSsZB-juwGyXC7-TaVpYswIwZIsyFtCIEjvt',
    'client_secret': 'EEIY4z-hhJbRRyP5XndSGVf8Xhu_r7gYTeM46TOSGN6NbQbXOIHPwZ36kjbtR7O3Ex-d78sqhpVXA9mg'
  });


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


export const paymentRequest = async(req, res) => {
    const { items } = req.body;

    console.log('items', items)
    
    const create_payment_json = {
      "intent": "sale",
      "payer": {
        "payment_method": "paypal"
      },
      "redirect_urls": {
        "return_url": "https://app.rouletterise.com/project1/blackRed",
        "cancel_url": "https://app.rouletterise.com/project1/blackRed"
      },
      "transactions": [{
        "item_list": {
          "items": items
        },
        "amount": {
          "currency": "USD",
          "total": items[0].price
        },
        "description": "Payment for items."
      }]
    };

  
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Payment creation failed' });
      } else {
        let approvalUrl;
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            approvalUrl = payment.links[i].href;
            break;
          }
        }
        res.status(200).json({ approvalUrl });
      }
    });
}


export const paymentCheckSuccess = async(req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
        "amount": {
          "currency": "USD",
          "total": "25.00"
        }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
      if (error) {
        console.error(error.response);
        res.send('Payment could not be completed');
      } else {
        res.send('Payment successful');
      }
    });
}
  



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

