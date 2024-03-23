import { NextResponse } from "next/server";

export async function GET(req) {
  // headers
  const reqHeaders = new Headers(req.headers);
  console.log(reqHeaders);

  // url query params => ?search="javascript.."
  const { searchParams } = new URL(req.url);
  console.log(searchParams); // URLSearchParams { 'search' => 'javascript' }
  console.log(searchParams.get("search")); // javascript

  // or another way to get search params
  console.log(req.nextUrl.searchParams.get("search"));

  //   cookies in next js
  const cookie = req.cookies;
  console.log(cookie);

  return NextResponse.json({
    msg: "Hello from next server!",
  });
}

export async function POST(req) {
  //   const jsonData = await req.json(); // get json data
  //   console.log(jsonData);

  const formData = await req.formData(); //   get form data
  console.log(formData.get("name"));
  console.log(formData.get("email"));

  return NextResponse.json({
    msg: "Post Request Success!",
  });
}
