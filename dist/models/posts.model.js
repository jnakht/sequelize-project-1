"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: true,
    // },
}, {
    sequelize: db_1.sequelize,
    tableName: "profile",
    modelName: "Profile",
    timestamps: true,
});
