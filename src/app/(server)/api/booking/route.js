import collections from "@/services/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const bookingData = await req.json();

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.insertOne(bookingData);

    return NextResponse.json(res);

    //
  } catch (error) {
    return NextResponse.json(error);
  }
};
