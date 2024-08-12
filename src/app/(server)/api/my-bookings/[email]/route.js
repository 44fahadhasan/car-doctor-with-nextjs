import collections from "@/services/connectDB";
import { NextResponse } from "next/server";

// single user bookings api
export const GET = async (req, { params }) => {
  const userEmail = params.email;

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.find({ email: userEmail }).toArray();

    return NextResponse.json(res);
    //
  } catch (error) {
    return NextResponse.json(error);
  }
};
