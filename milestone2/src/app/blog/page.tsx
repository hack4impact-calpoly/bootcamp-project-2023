// import React from 'react';
// import BlogPreview from '../components/blogPreview';
// import { blogs } from './blogData';
// import '../../../styles.css';

// export default function BlogList() {
//   return (
//     <div>
//       {blogs.map((blog, index) => (
//         <BlogPreview key={index} {...blog} />
//       ))}
//     </div>
//   );
// }

import React from "react";
import BlogPreview from '@/app/components/blogPreview';
import "../styles/website.css"
import connectDB from "@/helpers/db";
import Blogs from "../database/blogSchema"

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blogs.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blog() {
    const blogs = await getBlogs();
    return(
    <main>
        <h2 className="page-title">Blogs</h2>
        <div>
            {blogs == null ? (
                <div>
                    No blogs
                </div>):
                <div>
                    {blogs.map(blog =>
                        <BlogPreview  {...blog.toObject()} />
                    )}
                </div>
            }
        </div>
    </main>
        
    );

}