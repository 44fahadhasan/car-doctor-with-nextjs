import { services } from "@/lib/services";
import collections from "@/services/connectDB";
import { NextResponse } from "next/server";

// save all local data in database with this api

export const GET = async () => {
  const { servicesCollection } = await collections();

  try {
    // first delete all before saved data from services collection
    await servicesCollection.deleteMany();

    // new service data save to databsae
    const res = await servicesCollection.insertMany(services);

    return NextResponse.json(res);
    //
  } catch (error) {
    return NextResponse.json(error);
  }
};
