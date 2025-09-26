import { Router } from "express";
import * as userController from "../controllers/user.controller"
import * as testuserController from "../controllers/testuser.controller"
import * as postController from "../controllers/post.controller"

const router = Router();

router.post("/register", userController.createUser);
router.post("/test-register", testuserController.createUser);
router.post("/test-register-users", testuserController.createUsers);
// router.get("/testGetAllUsers", testuserController.getAllUsers);
router.get("/all-users", userController.getUsers);


// posts routes
router.post("/createPost", postController.createPost);


export const userRoute = router;