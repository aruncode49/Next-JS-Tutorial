import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id; // dynamic route
  console.log(id);
  return NextResponse.json({
    msg: "Dynamic Route",
  });
}
