import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";

type TTestUser = {
    firstName: string;
    lastName: string;
}

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
        // email: {
        //     type: DataTypes.STRING,
        // },
        // createdAt: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW,
        // }
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
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