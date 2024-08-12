import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json("Wellcome to Car Doctor Server");
};
