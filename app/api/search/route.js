import { connectDB } from "@/componens/connectdb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Case-insensitive search on product name
  const results = await Product.find({
    name: { $regex: query, $options: "i" }
  });

  return NextResponse.json({ results });
}
