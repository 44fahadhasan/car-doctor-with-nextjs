import collections from "@/services/connectDB";

// save all services data from database with this api

export const GET = async () => {
  const { servicesCollection } = await collections();

  try {
    const res = await servicesCollection.find().toArray();

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};
