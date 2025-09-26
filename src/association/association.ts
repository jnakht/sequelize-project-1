import { Profile } from "../models/profile.model";
import { User } from "../models/user.model";

User.hasOne(Profile, {
    foreignKey: "userId",
    as: 'profile'
})

Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'userInfo',
})