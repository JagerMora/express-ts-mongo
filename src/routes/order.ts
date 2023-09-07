import { Router } from "express";
import { getItems } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";

/**
 * only valid JWT have access
 */
const router = Router();

router.get("/", checkJwt, getItems);

export { router };
