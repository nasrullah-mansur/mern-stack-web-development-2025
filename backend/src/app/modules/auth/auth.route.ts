import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();

router.post("/login", AuthController.login)
router.get("/me", AuthController.me)
router.get("/logout", AuthController.logout)
router.post("/send-otp", AuthController.sendOtp)
router.post("/verify-otp", AuthController.verifyOtp)
router.post("/update-password", AuthController.updatePassword)

export const AuthRoute = router;