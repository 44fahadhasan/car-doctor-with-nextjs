import collections from "@/services/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  const deleteId = params.id;

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.deleteOne({
      _id: new ObjectId(deleteId),
    });

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};
