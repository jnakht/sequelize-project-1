import { Post } from "../models/posts.model";
import { User } from "../models/user.model";



export async function createPost( data: {
    content: string;
    userId: number;
}) {
    return Post.create(data);
}

export async function getPostWithUser () {
    // lazy loading
    const allUser = await User.findAll();

    const user = await User.findByPk(1);
    // this getPosts() method is dynamically made by sequelize
    if (!user) {
        throw new Error("user not found!");
    }
    const posts = await user.getPosts();
    return posts;
}