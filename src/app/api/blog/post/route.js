import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Post from "@/models/post.model.js";

// third party api call
// export async function GET(req) {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) throw new Error("Something went wrong!");
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// mongodb connection
await connectDB();

export async function GET(req) {
  try {
    const document = await Post.find();
    if (document)
      return NextResponse.json({
        msg: "Success",
        data: document,
      });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        msg: "Something went wrong!",
      },
      { status: 400 }
    );
  }
}

export async function POST(req) {
  try {
    const data = {
      title: "Test title",
      body: "this is the demo body",
    };

    const document = await Post.create(data);
    if (document)
      return NextResponse.json(
        {
          msg: "Document Created",
          data: document,
        },
        { status: 201 }
      );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      {
        msg: "Something went wrong!",
      },
      { status: 400 }
    );
  }
}
