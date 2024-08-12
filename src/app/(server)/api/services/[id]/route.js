import collections from "@/services/connectDB";
import { NextResponse } from "next/server";

// single service data find api
export const GET = async (req, { params }) => {
  const id = params?.id;

  try {
    const { servicesCollection } = await collections();

    const res = await servicesCollection.findOne({ _id: id });

    return NextResponse.json(res);

    //
  } catch (error) {
    return NextResponse.json(error);
  }
};
