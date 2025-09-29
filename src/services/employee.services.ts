import { Employee } from "../models/employee.model";

export async function createEmployee( data: {
    username: string;
    email: string;
    // employeeId: number;
    // id: number;
}) {
    const employee = await Employee.create({ ...data });
    console.log(employee);

    // const employeeId = `EMP${employee.id}`;
    // const updatedEmployee = await Employee.update({
    //     employeeId: employeeId
    // }, {
    //     where: {
    //         id: employee.id,
    //     }
    // })
    // return employee.reload();
    return employee;
}