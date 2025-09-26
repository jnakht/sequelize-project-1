
import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routes";
import notFound from "./middlewares/notFound";
import './association/association'

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.json())

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome To Test Server!"
    })
})

app.use(notFound);

// User.sync();
// User.sync({ force: true })
// User.sync({ alter: true })
// User.drop();

export default app;