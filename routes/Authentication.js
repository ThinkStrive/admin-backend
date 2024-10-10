import Express from 'express';
import { userLogin, userLoginGoogle, userRegister } from '../controllers/Authentication.js';


export const authRoute = Express.Router()



// Authentication
authRoute.post('/login', userLogin);

authRoute.post('/register', userRegister);

authRoute.post('/google_login', userLoginGoogle)