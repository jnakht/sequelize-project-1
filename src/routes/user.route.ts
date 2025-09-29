import { Router } from "express";
import * as userController from "../controllers/user.controller"
import * as testuserController from "../controllers/testuser.controller"
import * as postController from "../controllers/post.controller"
import * as studentCourseController from "../controllers/student-course.controller"
import * as employeeController from "../controllers/employee.controller"

const router = Router();

router.post("/register", userController.createUser);
router.delete("/delete", userController.deleteUser);
router.post("/test-register", testuserController.createUser);
router.post("/test-register-users", testuserController.createUsers);
// router.get("/testGetAllUsers", testuserController.getAllUsers);
router.get("/all-users", userController.getUsers);


// posts routes
router.post("/createPost", postController.createPost);
router.get("/getPost", postController.getPost);
router.post("/createStudentCourse", studentCourseController.createTest);
router.get("/getStudentCourse", studentCourseController.getTest);


// employee creatioin routes
router.post("/create-employee", employeeController.createEmployee);

export const userRoute = router;