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
exports.testCreateUser = testCreateUser;
exports.testCreateUsers = testCreateUsers;
exports.testGetAllUsers = testGetAllUsers;
const db_1 = require("../config/db");
const userTest_model_1 = require("../models/userTest.model");
function testCreateUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        // const testUser = await TestUser.build(data);
        // console.log(testUser.toJSON());
        // testUser.firstName = "Nadim";
        // return testUser.save();
        const testUser = yield userTest_model_1.TestUser.create(data);
        // testUser.set({
        //     firstName: "Nadim",
        //     lastName: "Khan",
        // })
        yield testUser.increment('age', { by: 2 });
        yield testUser.save();
        yield testUser.reload();
        console.log(testUser.toJSON()); // persist changes to DB
        return testUser.toJSON();
    });
}
function testCreateUsers(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const testUsers = yield userTest_model_1.TestUser.bulkCreate(data);
        // return testUsers.toJSON(); 
        return testUsers;
    });
}
function testGetAllUsers(data) {
    return __awaiter(this, void 0, void 0, function* () {
        //  const allUsers = await TestUser.findAll(); 
        // get specified fields
        // const allUsers = await TestUser.findAll({
        //     attributes: ["firstName", "id"]
        // })
        // attributes can be renamed
        // const allUsers = await TestUser.findAll({
        //     attributes: [["firstName", "FN"], ["id", "unique_id"]]
        // })
        // aggregation queries, count
        // const allUsers = await TestUser.findAll({
        //     attributes: [[sequelize.fn('COUNT', sequelize.col("firstName")), "nameCount"]]
        // })
        // aggregation queries, count
        // const allUsers = await TestUser.findAll({
        //     attributes: [[sequelize.fn('SUM', sequelize.col("age")), "age_of_sum"]],
        // })
        //  const allUsers = await TestUser.findAll({
        //     attributes: {
        //         include: [[sequelize.fn("COUNT", sequelize.col('age')), "total_age"]]
        //     }
        // })
        //  const allUsers = await TestUser.findAll({
        //     attributes: {
        //         exclude: ["age"]
        //     }
        // })
        // where clause
        // const allUsers = await TestUser.findAll({
        //     where: {
        //         id: 2,
        //         isActive: true
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //         firstName: "John",
        //         age: 27,
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //         id: [2, 3, 4],
        //         isActive: true,
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //         id: {
        //             [Op.eq]: 2
        //         }
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //         id: {
        //             [Op.in]: [2, 3, 5]
        //         }
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //        [Op.and]: [{id: 3}, {isActive: false}]
        //     }
        // })
        // const allUsers = await TestUser.findAll({
        //     where: {
        //        id: {
        //         [Op.or]: [2, 3]
        //        }
        //     }
        // })
        //    // rank < 1000 OR rank IS NULL
        // const allUsers = await TestUser.findAll({
        //     where: {
        //       rank: {
        //         [Op.or]: {
        //         [Op.lt]: 1000,
        //         [Op.eq]: null
        //       }
        //       }
        //     }
        // })
        //  const updatedUser = await TestUser.update({
        //     firstName: "Jisan",
        //     age: 22,
        //  }, 
        // {
        //     where: {
        //         id: 50
        //     }
        // })
        // const deleteUser = await TestUser.destroy({
        //     where: {
        //         id: 2
        //     }
        // })
        // return allUsers;
        // return updatedUser; // update returns 1 or 0
        // return deleteUser; // delete return 1 or 0
        // getter setter
        // const testUser = await TestUser.findAll();
        // update email
        //     const testUser = await TestUser.update({
        //         email: "hannah3@gmail.com",
        //     }, 
        // {
        //     where: {
        //         id: 12,
        //     }
        // })
        //     return testUser;
        // checking unique constraints
        // const testUser = await TestUser.update({
        //     email: "nadim6@gmail.com"
        // }, {
        //     where: {
        //         id: 25
        //     }
        // });
        // return testUser;
        // const [results, metadata] = await sequelize.query('SELECT * FROM users');
        // const [results, metadata] = await sequelize.query('UPDATE test_users SET age = 100 WHERE id = 4');
        // const [results, metadata] = await sequelize.query('SELECT * FROM test_users', {
        //     type: QueryTypes.SELECT
        // });
        // to get the features of getter, setter, virtuals, you must pass the model instance
        // const [results, metadata] = await sequelize.query('SELECT * FROM test_users', {
        //     // type: QueryTypes.SELECT,
        //     model: TestUser,
        //     mapToModel: true,
        // });
        // return { results, metadata };
        // replacements
        // const testUser = await sequelize.query('SELECT * FROM test_users where id >= ?', {
        //     replacements: ['5']
        // })
        // return testUser;
        // const testUser = await sequelize.query('SELECT * FROM test_users where id >= :id AND age >= :age', {
        //     replacements: { id: '5', age: '20' }
        // })
        const testUser = yield db_1.sequelize.query('SELECT * FROM test_users where id IN(:id)', {
            replacements: { id: ['24', '26'] }
        });
        return testUser;
    });
}
