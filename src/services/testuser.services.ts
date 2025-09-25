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
    
     const allUsers = await TestUser.findAll(); 
  
    return allUsers;
}


