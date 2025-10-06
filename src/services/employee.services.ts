import { Employee } from "../models/employee.model";

export async function createEmployee( data: {
    username: string;
    email: string;
    // employeeId: number;
    // id: number;
}) {
    const employee = await Employee.create({ ...data });
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



    await employee.reload();
    return employee;
}




export async function getAllEmployees() {
    const allEmployees = await Employee.findAll({});
    return allEmployees;
}
export async function deleteAEmployee(data: {
    id: number
}) {
    const deleteEmployee = await Employee.destroy({
        where: {
            id: data.id
        }
    })
    return deleteEmployee;
}
