
import { Request, Response } from "express";
import * as studentCourseService from '../services/student-course.service'

export async function createTest(req: Request, res: Response) {
    try {
        const studentCourse = await studentCourseService.createTest();
        res.status(201).json(studentCourse);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}


export async function getTest(req: Request, res: Response) {
    try {
        const studentCourse = await studentCourseService.getTest();
        res.status(201).json(studentCourse);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
}