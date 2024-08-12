import collections from "@/services/connectDB";
import { ObjectId } from "mongodb";

// get a single booking api
export const GET = async (req, { params }) => {
  const id = params.id;

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.findOne({
      _id: new ObjectId(id),
    });

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};

// update a single booking api
export const PATCH = async (req, { params }) => {
  const id = params.id;

  const { date, number, message } = await req.json();

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          date,
          number,
          message,
        },
      },
      {
        upsert: true,
      }
    );

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};

// delete a single booking api
export const DELETE = async (req, { params }) => {
  const id = params.id;

  try {
    const { bookingsCollection } = await collections();

    const res = await bookingsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return Response.json(res);
    //
  } catch (error) {
    return Response.json(error);
  }
};
