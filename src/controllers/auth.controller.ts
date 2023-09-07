import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const registerController = async ({ body }: Request, res: Response) => {
	const response = await registerNewUser(body);
	res.send(response);
};

const loginController = async ({ body }: Request, res: Response) => {
	const response = await loginUser(body);
	if (!response) {
		res.status(403).send(response);
	} else {
		res.send(response);
	}
};

export { registerController, loginController };
