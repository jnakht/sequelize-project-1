"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Course extends sequelize_1.Model {
}
exports.Course = Course;
Course.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
}, {
    sequelize: db_1.sequelize,
    tableName: "course",
    modelName: "Course",
    timestamps: true,
});
