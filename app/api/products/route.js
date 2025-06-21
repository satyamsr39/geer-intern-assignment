import { connectDB } from "@/componens/connectdb";
import product from "@/models/product"
import { NextResponse } from "next/server";

export async function POST(request){
    await connectDB();
    const body=await request.json()
    const { name ,price,  imageUrl} = body

    const newProduct=new product({name,price,imageUrl})
    await newProduct.save();

return NextResponse.json({success:true,message:`product save succesfully`})
}

export async function GET(){
    await connectDB();
    const getproducts=await product.find();
    return NextResponse.json({success:true, products:getproducts})
}

export async function DELETE(request) {
  await connectDB();
  const { id } = await request.json();
   const deletedProduct = await product.findByIdAndDelete(id);
   return NextResponse.json({ success: true, message: "Product deleted successfully",product:deletedProduct });
  }
