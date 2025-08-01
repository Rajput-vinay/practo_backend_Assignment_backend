
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () =>{
    try{
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${db.connection.host}`);
    }catch(error){
        console.log(error);
    }
}

export default connectDB;