import { Request, Response } from "express";
import * as userService from "../services/user.services"


export async function createUser(req: Request, res: Response) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export async function getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    //remove password and send 
    const safeUsers = users.map( (user) => {
        const { password, ...data } = user.toJSON();
        return data;
    })
    res.json(safeUsers);
}