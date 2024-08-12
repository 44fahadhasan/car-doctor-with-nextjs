// import connectDB from "@/services/connectDB";

import collections from "@/services/connectDB";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const newUser = await req?.json();

  // user password secure with bcrypt
  const hashPassword = bcrypt.hashSync(newUser?.password, 13);

  const secureNewUser = { ...newUser, password: hashPassword };

  try {
    // create a user collection in database
    // const database = await connectDB();
    // const usersCollection = database.collection("users");

    const { usersCollection } = await collections();

    // user is already exist in database checking start here
    const isExist = await usersCollection.findOne({ email: newUser?.email });

    if (isExist) {
      return NextResponse.json({
        message: "Your already have a account",
        status: 304,
      });
    }
    // user exist checking end here

    // user no account in database then execute the code
    const res = await usersCollection.insertOne(secureNewUser);

    return NextResponse.json({
      res,
    });
    //
  } catch (error) {
    return NextResponse.json({ error });
  }
};
