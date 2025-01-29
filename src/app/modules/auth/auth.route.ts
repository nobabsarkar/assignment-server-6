import express from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middleweres/validateRequest";
import { LoginValidations } from "./auth.validation";

const router = express.Router();

router.post(
  "/login",
  validateRequest(LoginValidations.loginValidationSchema),
  AuthControllers.login
);

export const LoginRoutes = router;
