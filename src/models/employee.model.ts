

import { DataTypes, HasManyGetAssociationsMixin, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"
import { Post } from "./posts.model";

export interface EmployeeAttributes {
    id: number;
    employeeId: string;
    username: string;
    email: string;
}

type EmployeeCreationAttributes = Optional<EmployeeAttributes, "id"|"employeeId">;

export class Employee
    extends Model<EmployeeAttributes, EmployeeCreationAttributes>
    implements EmployeeAttributes 
{
    public id!: number;
    public employeeId!: string;
    public username!: string;
    public email!: string;
    
    // public getPosts!: HasManyGetAssociationsMixin<Post>;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;   
}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,   
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
        sequelize,
        paranoid: true,
        tableName: "employees",
        modelName: "Employee",
        timestamps: true,
        deletedAt: true,
    }
)


Employee.beforeCreate( async (employee, _options) => {
    const lastEmployee = await Employee.findOne({
        order: [['id', 'DESC']],
        paranoid: false,
    })

    let nextNumber = 1;
    if (lastEmployee?.employeeId) {
        const lastNumber = parseInt(lastEmployee?.employeeId.replace("EMP", ""), 10);
        nextNumber = lastNumber + 1;
    }

    employee.employeeId = `EMP${String(nextNumber).padStart(3, "0")}`;
})