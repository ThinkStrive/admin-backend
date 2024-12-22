import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnect } from './DB/connection/Connection.js';
import { usersRoute } from './routes/Users.js';
import { authRoute } from './routes/Authentication.js';
import { paymentRouter } from './routes/payment.js';
import { checkAndExpireRouletteSpincycle , checkAndExpireBaccarat } from './controllers/Schedule.js';
import { feedbackRoutes } from './routes/Feedback.js'; 
import { historyRouter } from './routes/paidHistoryRoutes.js';
import { AdminEmailRoute } from './routes/AdminEmail.js';

// Config
dotenv.config();
const db = await dbConnect();
console.log(db);

const app = Express();

// PORT
const port = process.env.PORT || 7050;

// CORS Configuration
const allowedOrigins = [
  'https://game01-seven.vercel.app',
  'https://gaming01.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5000',
  'https://admin-gaming.netlify.app/',
  'https://gamin01.netlify.app/'
  // Add more domains as needed
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error: Origin ${origin} not allowed`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests

// Middleware
app.use(Express.json());

// API Routes
app.use('/authentication', authRoute);
app.use('/users', usersRoute);
app.use('/payment', paymentRouter);
app.use('/feedback', feedbackRoutes);
app.use('/paid-history' , historyRouter);
app.use('/email',AdminEmailRoute);


// Schedule Expiry Check
checkAndExpireBaccarat();
checkAndExpireRouletteSpincycle();

// Default Route


// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
