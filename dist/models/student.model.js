"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Student extends sequelize_1.Model {
}
exports.Student = Student;
Student.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
}, {
    sequelize: db_1.sequelize,
    tableName: "student",
    modelName: "Student",
    timestamps: true,
});
