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

     const allUsers = await TestUser.findAll({
        attributes: {
            exclude: ["age"]
        }
    })
  
    return allUsers;
}


