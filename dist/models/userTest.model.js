"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUser = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
exports.TestUser = db_1.sequelize.define('TestUser', {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        get() {
            const rawValue = this.getDataValue('firstName');
            return rawValue ? "Mr. " + rawValue : null;
        }
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        set(value) {
            this.setDataValue('lastName', value + " Khan");
        }
    },
    fullName: {
        type: sequelize_1.DataTypes.VIRTUAL,
        get() {
            return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
        },
        set(value) {
            throw new Error("FullName is Taken from firstName and lastName");
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        // unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: /^.{8,}$/,
        }
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isEven(value) {
                if (parseInt(value) % 2 === 0) {
                    throw new Error("Even Values are not allowed as age!");
                }
            }
        }
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, {
    tableName: 'test_users',
    // timestamps: true,
});
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
