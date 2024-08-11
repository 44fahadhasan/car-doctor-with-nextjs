import collections from "@/services/connectDB";

export const POST = async (req) => {
  const bookingData = await req.json();

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.insertOne(bookingData);

    return Response.json(res);

    //
  } catch (error) {
    return Response.json(error);
  }
};
