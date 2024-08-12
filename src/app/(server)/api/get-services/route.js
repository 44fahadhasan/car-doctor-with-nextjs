import collections from "@/services/connectDB";
import { NextResponse } from "next/server";

// save all services data from database with this api

export const GET = async () => {
  try {
    const { servicesCollection } = await collections();
    const res = await servicesCollection.find().toArray();

    return NextResponse.json(res);
    //
  } catch (error) {
    return NextResponse.json(error);
  }
};
