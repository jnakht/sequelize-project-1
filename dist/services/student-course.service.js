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
exports.createTest = createTest;
exports.getTest = getTest;
const course_model_1 = require("../models/course.model");
const student_model_1 = require("../models/student.model");
function createTest() {
    return __awaiter(this, void 0, void 0, function* () {
        const jisan = yield student_model_1.Student.create({ name: "Jisan" });
        const nadim = yield student_model_1.Student.create({ name: "Nadim" });
        const jishi = yield student_model_1.Student.create({ name: "Jishi" });
        const phy = yield course_model_1.Course.create({ title: "physics" });
        const eng = yield course_model_1.Course.create({ title: "english" });
        yield jisan.addCourse(phy);
        return eng;
    });
}
function getTest() {
    return __awaiter(this, void 0, void 0, function* () {
        const test = yield student_model_1.Student.findAll({
            include: course_model_1.Course
        });
        return test;
    });
}
