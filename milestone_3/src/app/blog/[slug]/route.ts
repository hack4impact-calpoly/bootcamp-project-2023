import { NextRequest, NextResponse } from "next/server"
import connectDB from "../../../helpers/db";
import projectSchema from "../../../database/blogSchema";

type IParams = {
    params: {
        slug: string
    }
}

/* 
	In order to use params, you need to have a request parameter before
	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.
	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug
	There are more ways to destructure this, but that is up to you to find out
	lol.
 */

    export async function GET(req: NextRequest, { params }: IParams) {
        await connectDB() // function from db.ts before
        const { slug } = params // another destructure

        try {
            const project = await projectSchema.findOne({ slug }).orFail()
            return NextResponse.json(project)
        } catch(err) {
            return NextResponse.json("Blog not found.", { status: 404 })
        }
    }