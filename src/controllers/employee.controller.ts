import { Request, Response } from "express";
import * as employeeServices from "../services/employee.services"


export async function createEmployee(req: Request, res: Response) {
    try {
        const employee = await employeeServices.createEmployee(req.body);
        // const profile = await profileService.createProfile({ bio: "Hufflepuff", userId: user.employeeId as number });
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export async function getAllEmployees(req: Request, res: Response) {
    try {
        const employees = await employeeServices.getAllEmployees();
        res.status(201).json(employees);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}

export async function deleteAEmployee(req: Request, res: Response) {
    try {
        const employees = await employeeServices.deleteAEmployee(req.body);
        res.status(201).json(employees);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}