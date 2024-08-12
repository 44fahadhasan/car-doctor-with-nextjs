import collections from "@/services/connectDB";

// save all services data from database with this api

export const GET = async () => {
  try {
    const { servicesCollection } = await collections();
    const res = await servicesCollection.find().toArray();

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};
