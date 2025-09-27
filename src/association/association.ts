import { Course } from "../models/course.model";
import { Post } from "../models/posts.model";
import { Profile } from "../models/profile.model";
import { Student } from "../models/student.model";
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
    as: 'posts'
})

Post.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})


// many-to-many
Student.belongsToMany(Course, { through: "StudentCourses"} );
Course.belongsToMany(Student, { through: "StudentCourses"} );

