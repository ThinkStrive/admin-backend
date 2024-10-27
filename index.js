import Express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './DB/connection/Connection.js';
import { usersRoute } from './routes/Users.js';
import { authRoute } from './routes/Authentication.js';
import { paymentRouter } from './routes/payment.js';
import { checkAndExpireSubscriptions } from './controllers/Schedule.js';


// Config
dotenv.config()
let db = await dbConnect()
console.log(db);


const app = Express()



// PORT
const port = process.env.PORT || 7050


// Default Middleware
app.use(cors())
app.use(Express.json())



// API Routes
// Authentication
// app.use('/', "welcome")
app.use('/authentication', authRoute)


// Users
app.use('/users', usersRoute)

// Payment
app.use('/payment', paymentRouter)


checkAndExpireSubscriptions()

app.get('/', (req, res) =>{
    res.send('Welcome')
})

app.listen(port, () => console.log('server is running on', port))
