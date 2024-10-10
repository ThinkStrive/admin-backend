import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


const local = 'mongodb://localhost:27017/Gaming-karthik'


let db_UserName = process.env.DB_USERNAME || ''
let db_password = process.env.DB_PASSWORD || ''
let db_Name = process.env.DB_NAME || ''
let db_Cluster = process.env.DB_CLUSTER || ''

const cloudURL = `mongodb+srv://${db_UserName}:${db_password}@${db_Cluster}/${db_Name}?retryWrites=true&w=majority`;
const URI = 'mongodb+srv://yadav:yadav@cluster1.ymy0t.mongodb.net/Scratch-Learn?retryWrites=true&w=majority'

export const dbConnect = async () => {
    try {
        const db = await mongoose.connect(local)
        if (db) {
            // await webinarModel.updateMany(
            //     { count: { $exists: false } },
            //     { $set: { count: 0 } } 
            //   );
            // console.log('DB Connected successfully')
            return 'DB Connected successfully'
        }
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}