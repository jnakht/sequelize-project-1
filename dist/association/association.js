"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_model_1 = require("../models/posts.model");
const profile_model_1 = require("../models/profile.model");
const user_model_1 = require("../models/user.model");
// one to one
user_model_1.User.hasOne(profile_model_1.Profile, {
    foreignKey: "userId",
    as: 'profile'
});
profile_model_1.Profile.belongsTo(user_model_1.User, {
    foreignKey: 'userId',
    as: 'userInfo',
});
// one to many
user_model_1.User.hasMany(posts_model_1.Post, {
    foreignKey: 'userId',
    as: 'post'
});
posts_model_1.Post.belongsTo(user_model_1.User, {
    foreignKey: 'userId',
    as: 'user'
});
