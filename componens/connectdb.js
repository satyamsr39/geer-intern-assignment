import mongoose from 'mongoose';

const MONGODB_URI=process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error("Invalid connection string")
}

export async function connectDB(){
const x=await mongoose.connect(MONGODB_URI,{})
return x;
}