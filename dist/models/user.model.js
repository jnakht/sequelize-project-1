"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    employeeId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        validate: { isEmail: true },
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM("admin", "hr", "employee"),
        allowNull: false,
        defaultValue: "employee",
    },
}, {
    sequelize: db_1.sequelize,
    paranoid: true,
    tableName: "users",
    modelName: "User",
    timestamps: true,
    deletedAt: true,
});
