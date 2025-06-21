import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
name:String,
price:Number,
imageUrl:String
},{timestamps:true})

export default mongoose.models.product || mongoose.model('product',productSchema)