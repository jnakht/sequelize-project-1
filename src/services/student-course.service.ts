import { Course } from "../models/course.model";
import { Student } from "../models/student.model";


export async function createTest() {
    const jisan = await Student.create({name: "Jisan"});
    const nadim = await Student.create({name: "Nadim"});
    const jishi = await Student.create({name: "Jishi"});

    const phy = await Course.create({ title: "physics"});
    const eng = await Course.create({ title: "english"});

    await jisan.addCourse(phy);
    return eng;
}


export async function getTest() {
    const test = await Student.findAll({
        include: Course
    })
    return test;
}