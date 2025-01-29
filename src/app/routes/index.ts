import { Router } from "express";
import { AuthRoutes } from "../modules/user/user.route";
import { LoginRoutes } from "../modules/auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/auth",
    route: LoginRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
