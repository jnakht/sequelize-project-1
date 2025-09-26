import { Post } from "../models/posts.model";



export async function createPost( data: {
    content: string;
    userId: number;
}) {
    return Post.create(data);
}