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
exports.createEmployee = createEmployee;
exports.getAllEmployees = getAllEmployees;
exports.deleteAEmployee = deleteAEmployee;
const employee_model_1 = require("../models/employee.model");
function createEmployee(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const employee = yield employee_model_1.Employee.create(Object.assign({}, data));
        // console.log(employee);
        // const employeeId = `EMP${employee.id}`;
        // const updatedEmployee = await Employee.update({
        //     employeeId: employeeId
        // }, {
        //     where: {
        //         id: employee.id,
        //     }
        // })
        // return employee.reload();
        yield employee.reload();
        return employee;
    });
}
function getAllEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const allEmployees = yield employee_model_1.Employee.findAll({});
        return allEmployees;
    });
}
function deleteAEmployee(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const deleteEmployee = yield employee_model_1.Employee.destroy({
            where: {
                id: data.id
            }
        });
        return deleteEmployee;
    });
}
