import collections from "@/services/connectDB";

// single user bookings api
export const GET = async (req, { params }) => {
  const userEmail = params.email;

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.find({ email: userEmail }).toArray();

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};
