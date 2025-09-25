"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("./user.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRoute,
    }
];
moduleRoutes.forEach(route => {
    if (Array.isArray(route.route)) {
        route.route.forEach(r => exports.router.use(route.path, r));
    }
    else {
        exports.router.use(route.path, route.route);
    }
});
