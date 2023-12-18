import { Comment as CommentType } from "../database/blogSchema";

export const addComment = async (slug: string, comment: CommentType) => {
  console.log("inside addComment util");
  console.log(slug);
  try {
    const res = await fetch(`http://localhost:3000/api/comment/${slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to add comment");
    }

    const res_j = await res.json();
    return res_j;
  } catch (err: unknown) {
    console.error(`error: ${err}`);
    return null;
  }
};