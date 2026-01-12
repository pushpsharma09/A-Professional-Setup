import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

//step - 2 for connecting db

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
        // Log connection info
        console.log(`\n✅ MongoDB Connected!`);


    }
    catch (error) {
        console.log("MONGODB connection errorr", error)
        process.exit(1)
    }
}
export default connectDB