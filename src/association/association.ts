import { Post } from "../models/posts.model";
import { Profile } from "../models/profile.model";
import { User } from "../models/user.model";


// one to one
User.hasOne(Profile, {
    foreignKey: "userId",
    as: 'profile'
})

Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userInfo',
})


// one to many
User.hasMany(Post, {
    foreignKey: 'userId',
    as: 'post'
})

Post.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

