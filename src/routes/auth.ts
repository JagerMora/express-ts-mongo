import { Request, Response, Router } from "express";
import {
	registerController,
	loginController,
} from "../controllers/auth.controller";

const router = Router();

/**
 * http://localhost:3002/register [POST]
 * http://localhost:3002/login [POST]
 */
router.post("/register", registerController);
router.post("/login", loginController);

export { router };
