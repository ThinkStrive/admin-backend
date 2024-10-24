import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


const local = 'mongodb://localhost:27017/Gaming-karthik'


// let db_UserName = process.env.DB_USERNAME || ''
// let db_password = process.env.DB_PASSWORD || ''
// let db_Name = process.env.DB_NAME || ''
// let db_Cluster = process.env.DB_CLUSTER || ''
let db_UserName = 'GamingKarthik'
let db_password = 'Y2j2oOR4ngm9pC6H'
let db_Name = 'Gaming-Karthik'
let db_Cluster = 'cluster0.5fc7k.mongodb.net'

const cloudURL = `mongodb+srv://${db_UserName}:${db_password}@${db_Cluster}/${db_Name}?retryWrites=true&w=majority`;

export const dbConnect = async () => {
    try {
        const db = await mongoose.connect(cloudURL)
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