import { userModel } from "../DB/models/Users.js";
const DB = userModel;
import { transporter , mailOptions } from "../routes/mail.js";
import { ADMIN_MAIL_TEMPLATE } from "../routes/mailTemplate.js";

export const sendEmailToUsers = async(req,res)=>{
    const { status , subject , body } = req.body;
    
    try {
        let users ;
        if(status === "all"){
            users = await DB.find({}).select('userEmail userName');
        }else if(status === "active"){
            users = await DB.find({
                subscriptionType:{$in:['daily','monthly','weekly']}
            }).select('userEmail userName');
        }else if(['daily','weekly','monthly'].includes(status)){
            users = await DB.find({
                subscriptionType:status
            }).select('userEmail userName');
        }else{
            return res.status(400).json({status:false,message:"Invalid status provided"});
        }

        const userEmails = users.map(user=>({
            email:user.userEmail,
            name:user.userName
        }));

        if(userEmails.length === 0){
            return res.status(200).json({
                status:false,
                message:"No users found in this category!"
            })
        }
        
        await Promise.all(
            userEmails.map(user => {
                const { email , name } = user ;
                const htmlBody = ADMIN_MAIL_TEMPLATE(subject,name,body);

                const emailOptions = {
                    ...mailOptions,
                    to:email,
                    subject,
                    html:htmlBody
                };
                return transporter.sendMail(emailOptions);
            })
        );

        res.status(200).json({
            status:true,
            message:`Emails Sent Successfully to ${status} users !`
        })
        
    } catch (error) {
        res.status(500).json({status:false,message:"Failed to send emails",error:error.message});
    }
}