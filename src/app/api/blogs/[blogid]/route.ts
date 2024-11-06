import { NextResponse } from "next/server";
import { dbConnect } from "../../../../config/dbConnect";
import Blog from "../../../../models/blogModel";

dbConnect();

export async function GET(request, { params }) {
  try {
    const blog = await Blog.findById(params.blogid);
    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const reqBody = await request.json();
    await Blog.findByIdAndUpdate(params.blogid, reqBody);
    return NextResponse.json({
      success: true,
      message: "Blog updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await Blog.findByIdAndDelete(params.blogid);
    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
