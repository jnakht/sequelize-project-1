import { User } from "./models/user.model";
import express, { Request, Response } from "express"

const app = express();

app.use("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome To Test Server!"
    })
})

// User.sync();
User.sync({ force: true })
// User.sync({ alter: true })
// User.drop();

export default app;