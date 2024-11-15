
import Express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './DB/connection/Connection.js';
// import { usersRoute } from './routes/Users.js';
import { authRoute } from './routes/Authentication.js';
// import { paymentRouter } from './routes/payment.js';
// import { checkAndExpireSubscriptions } from './controllers/Schedule.js';


// Config
dotenv.config()
let db = await dbConnect()
console.log(db);


const app = Express()



// PORT
const port = process.env.PORT ||''


// Default Middleware
app.use(cors())
app.use(Express.json())

// const allowedOrigins = [
//   'https://game01-seven.vercel.app',
//   "https://gaming01.vercel.app",
//   'http://localhost:5173',
//   'http://localhost:5174',
//   'http://localhost:5000',
//   'https://gamin01.netlify.app',
//   'https://admin-gaming.netlify.app'
//   // Add more domains as needed
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   methods: 'GET,POST,PUT,DELETE', // Allowed methods
//   allowedHeaders: 'Content-Type,Authorization', // Headers you want to allow
//   credentials: true, // Enable if you need cookies/auth headers
// };

app.use(cors());


// API Routes
// Authentication
// app.use('/', "welcome")
app.use('/authentication', authRoute)


// // Users
// app.use('/users', usersRoute)

// // Payment
// app.use('/payment', paymentRouter)


// checkAndExpireSubscriptions()

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(port, () => console.log('server is running on', port))
