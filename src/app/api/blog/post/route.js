import { NextResponse } from "next/server";

// third party api call
export async function GET(req) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Something went wrong!");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error.message);
  }
}
