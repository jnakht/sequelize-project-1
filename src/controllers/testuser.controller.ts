import { Request, Response } from "express";
import * as testuserServices from "../services/testuser.services"

export async function createUser(req: Request, res: Response) {
    try {
        const user = await testuserServices.testCreateUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}