import Express from 'express';
import { userForgotPassword, userLogin, userLoginGoogle, userRegister, userResetPassword } from '../controllers/Authentication.js';


export const authRoute = Express.Router()



// Authentication
authRoute.post('/login', userLogin);

authRoute.post('/register', userRegister);
authRoute.post('/forgotPassword',userForgotPassword);
authRoute.post('/resetPassword',userResetPassword)
authRoute.post('/google_login', userLoginGoogle);