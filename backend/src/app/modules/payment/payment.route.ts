import { Router } from "express";
import { PaymentController } from "./payment.controller.js";


const router = Router();


router.post('/success', PaymentController.success)

export const PaymentRoute = router;







