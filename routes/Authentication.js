import Express from 'express';
import { userDelete, userForgotPassword, userLogin, userLoginGoogle, userRegister, userRegisterVerifyEmail, userResetPassword } from '../controllers/Authentication.js';


export const authRoute = Express.Router()

// Authentication
authRoute.post('/login', userLogin);

authRoute.post('/register', userRegister);

authRoute.post('/verifyEmail', userRegisterVerifyEmail);

authRoute.post('/forgotPassword',userForgotPassword);

authRoute.post('/resetPassword',userResetPassword)

authRoute.post('/google_login', userLoginGoogle);



authRoute.delete('/delete', userDelete);


