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
exports.Employee = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
class Employee extends sequelize_1.Model {
}
exports.Employee = Employee;
Employee.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    paranoid: true,
    tableName: "employees",
    modelName: "Employee",
    timestamps: true,
    deletedAt: true,
});
Employee.beforeCreate((employee, _options) => __awaiter(void 0, void 0, void 0, function* () {
    const lastEmployee = yield Employee.findOne({
        order: [['id', 'DESC']],
        paranoid: false,
    });
    let nextNumber = 1;
    if (lastEmployee === null || lastEmployee === void 0 ? void 0 : lastEmployee.employeeId) {
        const lastNumber = parseInt(lastEmployee === null || lastEmployee === void 0 ? void 0 : lastEmployee.employeeId.replace("EMP", ""), 10);
        nextNumber = lastNumber + 1;
    }
    employee.employeeId = `EMP${String(nextNumber).padStart(3, "0")}`;
}));
