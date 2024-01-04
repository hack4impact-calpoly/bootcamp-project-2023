
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from '@/database/blogSchema'

export type IParams = {
		params: {
			slug: string;
		};
    };


export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;

    try {  
        console.log("slug: " + slug);
        const blog = await blogSchema.findOne({ slug }).orFail();
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json({ error: 'Blog not found.' }, { status: 404 });
    }
}
	  
