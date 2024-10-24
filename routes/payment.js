import Express from 'express'
import { createNewPayment, deleteSinglePayment, getSinglePayment, listAllPayments, paymentCheckSuccess, paymentRequest, updateSinglePayment } from '../controllers/payment.js'

export const paymentRouter = Express.Router()



paymentRouter.get('/', listAllPayments)

paymentRouter.get('/:id', getSinglePayment)

paymentRouter.post('/pay', paymentRequest)

paymentRouter.post('/checkPaymentStatus', paymentCheckSuccess)

paymentRouter.post('/', createNewPayment)

paymentRouter.put('/:id', updateSinglePayment)

paymentRouter.delete('/:id', deleteSinglePayment)