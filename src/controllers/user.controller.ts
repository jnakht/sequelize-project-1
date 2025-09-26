import { Request, Response } from "express";
import * as userService from "../services/user.services"
import * as profileService from "../services/profile.services"


export async function createUser(req: Request, res: Response) {
    try {
        const user = await userService.createUser(req.body);
        // const profile = await profileService.createProfile({ bio: "Hufflepuff", userId: user.employeeId as number });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export async function getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    //remove password and send 
    // const safeUsers = users.map( (user) => {
    //     const { password, ...data } = user.toJSON();
    //     return data;
    // })
    // res.json(safeUsers);
    res.json(users);
}


export async function deleteUser(req: Request, res: Response) {
    try {
        const deletedUser = await userService.deleteUser(req.body);
      
        res.status(201).json(deletedUser);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}