import { Router } from "express";
import { userRoute } from "./user.route";


export const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoute,
    }
]

moduleRoutes.forEach( route => {
    if (Array.isArray(route.route)) {
        route.route.forEach( r => router.use(route.path, r));
    } else {
        router.use(route.path, route.route);
    }
})