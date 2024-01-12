import { NextRequest, NextResponse } from 'next/server'
import connectDB from "../../../../../.vscode/src/helpers/db"
import Blog from '../../../../../.vscode/src/database/blogSchema'

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams){
    await connectDB(); // function from db.ts before
	const { slug } = params;
	try {
	    const blog = await Blog.findOne({ slug }).orFail();
	    return NextResponse.json(blog)
	} catch (err) {
	    return NextResponse.json('Blog not found.', { status: 404 });
	}
}