import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";



export const TestUser = sequelize.define(
    'TestUser',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    },
    {
        tableName: 'test_users',
        // timestamps: true,
    }
)

// console.log(User === sequelize.models.User);



// class User extends Model {}

// User.init(
//     {
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         sequelize,
//         modelName: "User",
//         tableName: 'users',
//     }
// )

// console.log(User === sequelize.models.User);

// export default User;