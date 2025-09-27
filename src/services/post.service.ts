import { sequelize } from "../config/db";
import { Post } from "../models/posts.model";
import { User } from "../models/user.model";



// export async function createPost( data: {
//     content: string;
//     userId: number;
// }) {
//     return Post.create(data);
// }

// createPost updated code(postCount handled)
export async function createPost( data: {
    content: string;
    userId: number;
}) {
   const result = await sequelize.transaction( async t => {
        const post = await Post.create(data, { transaction: t });

        const user = await User.findByPk(post.userId, { transaction: t });
        if (!user) {
            throw new Error("user not found!");
        }
        await user.update(
            { postCount: (user.postCount || 0) + 1 },
            { transaction: t },
        )

        return post;
    })
    return result;

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