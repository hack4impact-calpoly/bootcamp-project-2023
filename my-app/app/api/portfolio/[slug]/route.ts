import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../../.vscode/src/helpers/db";
import Project from "../../../../../.vscode/src/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  }
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure
  console.log(slug)
  try {
    const portfolio = await Project.findOne({ slug }).orFail();
    console.log("projects", portfolio)
    return NextResponse.json(portfolio);
  } catch (err) {
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}