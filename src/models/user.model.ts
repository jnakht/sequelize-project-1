import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";


export const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        // email: {
        //     type: DataTypes.STRING,
        // },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        tableName: 'users',
        timestamps: true,
        createdAt: false,
        updatedAt: "updatedTimeStamp"
    }
)

console.log(User === sequelize.models.User);