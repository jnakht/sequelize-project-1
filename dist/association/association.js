"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_model_1 = require("../models/course.model");
const posts_model_1 = require("../models/posts.model");
const profile_model_1 = require("../models/profile.model");
const student_model_1 = require("../models/student.model");
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
    as: 'posts'
});
posts_model_1.Post.belongsTo(user_model_1.User, {
    foreignKey: 'userId',
    as: 'user'
});
// many-to-many
student_model_1.Student.belongsToMany(course_model_1.Course, { through: "StudentCourses" });
course_model_1.Course.belongsToMany(student_model_1.Student, { through: "StudentCourses" });
