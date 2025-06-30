import mongoose from "mongoose";
import mangoose from "mongoose";

const connectDB =async ()=>{
    try{
        mongoose.connection.on('connected', ()=> console.log("Database Connected"))
       await mongoose.connect(`${process.env.MONGODM_URI}/hotel-booking`)

    }catch (error){
        console.log(error.message);
    }
}


export default connectDB;