import { Router } from "express";
import * as userController from "../controllers/user.controller"

const router = Router();

router.post("/register", userController.createUser);
router.get("/all-users", userController.getUsers);


export const userRoute = router;