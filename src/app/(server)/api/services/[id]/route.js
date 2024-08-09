import collections from "@/services/connectDB";

// single service data find api
export const GET = async (req, { params }) => {
  const id = params?.id;

  try {
    const { servicesCollection } = await collections();

    const res = await servicesCollection.findOne({ _id: id });

    return Response.json(res);

    //
  } catch (error) {
    return Response.json(error);
  }
};
