import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Hello World from Next JS Blog Application API",
  });
}
