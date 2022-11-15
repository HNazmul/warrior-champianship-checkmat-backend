import { Router, Request, Response, NextFunction, Express } from "express";
import { RouteController } from "../types/routeController";

const defaultRouter = Router();

defaultRouter.get("/", (req, res) => {
    res.send(`<h1>Hey Don't Worry I am working</h1>`);
});

//Connecting All Route to Application:Express
interface Route {
    path: string;
    handler: RouteController | Router;
}
const routes: Route[] = [
    {
        path: "/",
        handler: defaultRouter,
    },
];

export const connectingDefaultRoute = function (app: Express) {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });
};
