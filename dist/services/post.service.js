"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = createPost;
exports.getPostWithUser = getPostWithUser;
const db_1 = require("../config/db");
const posts_model_1 = require("../models/posts.model");
const user_model_1 = require("../models/user.model");
// export async function createPost( data: {
//     content: string;
//     userId: number;
// }) {
//     return Post.create(data);
// }
// createPost updated code(postCount handled)
function createPost(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db_1.sequelize.transaction((t) => __awaiter(this, void 0, void 0, function* () {
            const post = yield posts_model_1.Post.create(data, { transaction: t });
            const user = yield user_model_1.User.findByPk(post.userId, { transaction: t });
            if (!user) {
                throw new Error("user not found!");
            }
            yield user.update({ postCount: (user.postCount || 0) + 1 }, { transaction: t });
            return post;
        }));
        return result;
    });
}
function getPostWithUser() {
    return __awaiter(this, void 0, void 0, function* () {
        // lazy loading
        const allUser = yield user_model_1.User.findAll();
        const user = yield user_model_1.User.findByPk(1);
        // this getPosts() method is dynamically made by sequelize
        if (!user) {
            throw new Error("user not found!");
        }
        const posts = yield user.getPosts();
        return posts;
    });
}
