import { Op } from "sequelize";
import { sequelize } from "../config/db";
import { TestUser } from "../models/userTest.model";



export async function testCreateUser(data: {
    firstName: string;
    lastName: string;
}) {
    // const testUser = await TestUser.build(data);
    // console.log(testUser.toJSON());
    // testUser.firstName = "Nadim";
    // return testUser.save();




     const testUser = await TestUser.create(data); 
    // testUser.set({
    //     firstName: "Nadim",
    //     lastName: "Khan",
    // })
    await testUser.increment('age', { by: 2 });
    await testUser.save();
    await testUser.reload(); 
    console.log(testUser.toJSON());        // persist changes to DB
    return testUser.toJSON(); 
}


export async function testCreateUsers(data: any) {
    
     const testUsers = await TestUser.bulkCreate(data); 
     
    // return testUsers.toJSON(); 
    return testUsers;
}


export async function testGetAllUsers() {
    
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

    const deleteUser = await TestUser.destroy({
        where: {
            id: 2
        }
    })
  
    // return allUsers;
    // return updatedUser; // update returns 1 or 0
    return deleteUser; // delete return 1 or 0
}


