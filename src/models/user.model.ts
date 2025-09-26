import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db"

export interface UserAttributes {
    employeeId: number;
    username: string;
    email: string;
    phone: string;
    password: string;
    role: "admin" | "hr" | "employee";
}

type UserCreationAttributes = Optional<UserAttributes, "employeeId">;

export class User 
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes 
{
    public employeeId!: number;
    public username!: string;
    public email!: string;
    public phone!: string;
    public password!: string;
    public role!: "admin" | "hr" | "employee";

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        employeeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: { isEmail: true },
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("admin", "hr", "employee"),
            allowNull: false,
            defaultValue: "employee",
        },
    },
    {
        sequelize,
        paranoid: true,
        tableName: "users",
        modelName: "User",
        timestamps: true,
        deletedAt: true,
    }
)