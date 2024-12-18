import Express from 'express';
import { sendEmailToUsers } from '../controllers/AdminEmail.js';

export const AdminEmailRoute = Express.Router();

AdminEmailRoute.post("/send",sendEmailToUsers);