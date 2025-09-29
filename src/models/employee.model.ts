

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